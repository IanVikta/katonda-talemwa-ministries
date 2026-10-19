import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail, validateText } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/prayers - Submit prayer request
router.post('/', async (req, res) => {
  try {
    const { name, email, request } = req.body;

    const nameCheck = validateName(name, 'Name', true);
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

    const requestCheck = validateText(request, 'Prayer request', 5, 5000, true);
    if (!requestCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: requestCheck.error
      });
    }

    let dbSuccess = false;
    let insertId = null;

    try {
      const [result] = await pool.execute(
        'INSERT INTO prayers (name, email, request) VALUES (?, ?, ?)',
        [nameCheck.sanitized, emailCheck.sanitized, requestCheck.sanitized]
      );
      dbSuccess = true;
      insertId = result.insertId;
    } catch (dbErr) {
      console.error('Database insert error (prayers):', dbErr.message);
    }

    let emailSent = false;
    try {
      await sendNotification({
        type: 'prayer',
        data: {
          name: nameCheck.sanitized,
          email: emailCheck.sanitized,
          request: requestCheck.sanitized
        }
      });
      emailSent = true;
    } catch (err) {
      console.error('Email dispatch error:', err.message);
    }

    if (dbSuccess || emailSent) {
      return res.status(201).json({
        success: true,
        message: 'Your prayer request has been received. Our ministry family is standing with you in prayer.',
        id: insertId
      });
    }

    throw new Error('Both database storage and email notification failed');
  } catch (error) {
    console.error('Error submitting prayer request:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while submitting your prayer request.'
    });
  }
});

// GET /api/prayers - List prayer requests
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM prayers ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching prayer requests:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve prayer requests' });
  }
});

export default router;
