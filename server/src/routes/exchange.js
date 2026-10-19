import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail, validateText } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/exchange-inquiries - Submit trip / mission exchange inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, groupType, teamSize, preferredDate, message } = req.body;

    const nameCheck = validateName(name, 'Contact person name', true);
    if (!nameCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: nameCheck.error
      });
    }

    const emailCheck = validateEmail(email, true);
    if (!emailCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: emailCheck.error
      });
    }

    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid phone number.'
      });
    }

    const groupTypeCheck = validateText(groupType, 'Group type', 1, 100, true);
    if (!groupTypeCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: groupTypeCheck.error
      });
    }

    const dbPromise = pool.execute(
      'INSERT INTO exchange_inquiries (name, email, phone, group_type, team_size, preferred_date, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        nameCheck.sanitized,
        emailCheck.sanitized,
        phone.trim(),
        groupTypeCheck.sanitized,
        teamSize ? teamSize.trim() : null,
        preferredDate ? preferredDate.trim() : null,
        message ? message.trim() : null
      ]
    ).then(([result]) => ({ ok: true, id: result?.insertId }))
     .catch(err => {
       console.error('Database insert error (exchange):', err.message);
       return { ok: false };
     });

    const emailPromise = sendNotification({
      type: 'exchange',
      data: {
        name: nameCheck.sanitized,
        email: emailCheck.sanitized,
        phone: phone.trim(),
        groupType: groupTypeCheck.sanitized,
        teamSize: teamSize ? teamSize.trim() : '',
        preferredDate: preferredDate ? preferredDate.trim() : '',
        message: message ? message.trim() : ''
      }
    }).then(() => ({ ok: true }))
      .catch(err => {
        console.error('Email dispatch error (exchange):', err.message);
        return { ok: false };
      });

    const outcomes = await Promise.race([
      Promise.all([dbPromise, emailPromise]),
      new Promise(resolve => setTimeout(() => resolve([{ ok: true }, { ok: true }]), 3500))
    ]);

    const insertId = outcomes[0]?.id || null;

    return res.status(201).json({
      success: true,
      message: 'Your exchange trip inquiry has been received. Our team will contact you within 24 hours.',
      id: insertId
    });
  } catch (error) {
    console.error('Error submitting exchange inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while submitting your inquiry.'
    });
  }
});

// GET /api/exchange-inquiries - List trip inquiries
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM exchange_inquiries ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching exchange inquiries:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve inquiries' });
  }
});

export default router;
