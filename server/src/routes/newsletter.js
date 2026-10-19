import { Router } from 'express';
import pool from '../config/db.js';
import { validateEmail } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/newsletter - Subscribe email to newsletter
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    const emailCheck = validateEmail(email, true);
    if (!emailCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: emailCheck.error
      });
    }

    const cleanEmail = emailCheck.sanitized;

    let dbSuccess = false;

    try {
      // Use INSERT ... ON DUPLICATE KEY UPDATE so existing subscribers don't crash
      await pool.execute(
        'INSERT INTO newsletter_subscribers (email, is_active) VALUES (?, 1) ON DUPLICATE KEY UPDATE is_active = 1',
        [cleanEmail]
      );
      dbSuccess = true;
    } catch (dbErr) {
      console.error('Database insert error (newsletter):', dbErr.message);
    }

    let emailSent = false;
    try {
      await sendNotification({
        type: 'newsletter',
        data: {
          email: cleanEmail
        }
      });
      emailSent = true;
    } catch (err) {
      console.error('Email dispatch error:', err.message);
    }

    if (dbSuccess || emailSent) {
      return res.status(200).json({
        success: true,
        message: 'Thank you for subscribing to the Katonda Talemwa Ministries newsletter!'
      });
    }

    throw new Error('Both database storage and email notification failed');
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while subscribing. Please try again.'
    });
  }
});

// GET /api/newsletter - List active subscribers
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, email, created_at FROM newsletter_subscribers WHERE is_active = 1 ORDER BY created_at DESC');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve newsletter subscribers' });
  }
});

export default router;
