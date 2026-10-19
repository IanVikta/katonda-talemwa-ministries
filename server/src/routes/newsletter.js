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

    const dbPromise = pool.execute(
      'INSERT INTO newsletter_subscribers (email, is_active) VALUES (?, 1) ON DUPLICATE KEY UPDATE is_active = 1',
      [cleanEmail]
    ).then(() => ({ ok: true }))
     .catch(err => {
       console.error('Database insert error (newsletter):', err.message);
       return { ok: false };
     });

    const emailPromise = sendNotification({
      type: 'newsletter',
      data: {
        email: cleanEmail
      }
    }).then(() => ({ ok: true }))
      .catch(err => {
        console.error('Email dispatch error (newsletter):', err.message);
        return { ok: false };
      });

    await Promise.race([
      Promise.all([dbPromise, emailPromise]),
      new Promise(resolve => setTimeout(resolve, 3500))
    ]);

    return res.status(200).json({
      success: true,
      message: 'Thank you for subscribing to the Katonda Talemwa Ministries newsletter!'
    });

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
