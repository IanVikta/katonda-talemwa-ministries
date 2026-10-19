import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail, validateText } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/volunteers - Submit volunteer application
router.post('/', async (req, res) => {
  try {
    const { name, email, country, role, duration, message } = req.body;

    const nameCheck = validateName(name, 'Full Name', true);
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

    const countryCheck = validateText(country, 'Country of residence', 2, 100, true);
    if (!countryCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: countryCheck.error
      });
    }

    const roleCheck = validateText(role, 'Preferred role', 2, 100, true);
    if (!roleCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: roleCheck.error
      });
    }

    const durationCheck = validateText(duration, 'Available duration', 1, 100, true);
    if (!durationCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: durationCheck.error
      });
    }

    let dbSuccess = false;
    let insertId = null;

    try {
      const [result] = await pool.execute(
        'INSERT INTO volunteers (name, email, country, role, duration, message) VALUES (?, ?, ?, ?, ?, ?)',
        [
          nameCheck.sanitized,
          emailCheck.sanitized,
          countryCheck.sanitized,
          roleCheck.sanitized,
          durationCheck.sanitized,
          message ? message.trim() : null
        ]
      );
      dbSuccess = true;
      insertId = result.insertId;
    } catch (dbErr) {
      console.error('Database insert error (volunteers):', dbErr.message);
    }

    let emailSent = false;
    try {
      await sendNotification({
        type: 'volunteer',
        data: {
          name: nameCheck.sanitized,
          email: emailCheck.sanitized,
          country: countryCheck.sanitized,
          role: roleCheck.sanitized,
          duration: durationCheck.sanitized,
          message: message ? message.trim() : ''
        }
      });
      emailSent = true;
    } catch (err) {
      console.error('Email dispatch error:', err.message);
    }

    if (dbSuccess || emailSent) {
      return res.status(201).json({
        success: true,
        message: 'Your volunteer application has been submitted successfully.',
        id: insertId
      });
    }

    throw new Error('Both database storage and email notification failed');
  } catch (error) {
    console.error('Error submitting volunteer application:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your volunteer application.'
    });
  }
});

// GET /api/volunteers - List volunteer applications
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM volunteers ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve volunteers' });
  }
});

export default router;
