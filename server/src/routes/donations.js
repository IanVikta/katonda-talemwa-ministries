import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/donations - Record a donation pledge/attempt
router.post('/', async (req, res) => {
  try {
    const { donorName, donorEmail, amount, frequency, designation } = req.body;

    const nameCheck = validateName(donorName, 'Donor name', false);
    if (!nameCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: nameCheck.error
      });
    }

    const emailCheck = validateEmail(donorEmail, false);
    if (!emailCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: emailCheck.error
      });
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid donation amount greater than 0.'
      });
    }

    const freq = frequency === 'monthly' ? 'monthly' : 'one-time';
    const desig = designation ? designation.trim() : 'Where Most Needed (General Fund)';

    let dbSuccess = false;
    let insertId = null;

    try {
      const [result] = await pool.execute(
        'INSERT INTO donations (donor_name, donor_email, amount, frequency, designation, status) VALUES (?, ?, ?, ?, ?, ?)',
        [
          nameCheck.sanitized,
          emailCheck.sanitized,
          parsedAmount,
          freq,
          desig,
          'pledged'
        ]
      );
      dbSuccess = true;
      insertId = result.insertId;
    } catch (dbErr) {
      console.error('Database insert error (donations):', dbErr.message);
    }

    let emailSent = false;
    try {
      await sendNotification({
        type: 'donation',
        data: {
          donorName: nameCheck.sanitized,
          donorEmail: emailCheck.sanitized,
          amount: parsedAmount,
          frequency: freq,
          designation: desig
        }
      });
      emailSent = true;
    } catch (err) {
      console.error('Email dispatch error:', err.message);
    }

    if (dbSuccess || emailSent) {
      return res.status(201).json({
        success: true,
        message: 'Donation pledge recorded successfully.',
        id: insertId
      });
    }

    throw new Error('Both database storage and email notification failed');
  } catch (error) {
    console.error('Error recording donation:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while recording the donation.'
    });
  }
});

// GET /api/donations - List donations
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM donations ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching donations:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve donations' });
  }
});

export default router;
