import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail, validateText } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const nameValidation = validateName(name, 'Full Name', true);
    if (!nameValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: nameValidation.error
      });
    }

    const emailValidation = validateEmail(email, true);
    if (!emailValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: emailValidation.error
      });
    }

    const subjectValidation = validateText(subject, 'Subject', 2, 200, true);
    if (!subjectValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: subjectValidation.error
      });
    }

    const messageValidation = validateText(message, 'Message', 5, 5000, true);
    if (!messageValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: messageValidation.error
      });
    }

    // Perform database storage and email notification concurrently
    const dbPromise = pool.execute(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [
        nameValidation.sanitized,
        emailValidation.sanitized,
        subjectValidation.sanitized,
        messageValidation.sanitized
      ]
    ).then(([result]) => ({ ok: true, id: result?.insertId }))
     .catch(err => {
       console.error('Database insert error (contacts):', err.message);
       return { ok: false };
     });

    const emailPromise = sendNotification({
      type: 'contact',
      data: {
        name: nameValidation.sanitized,
        email: emailValidation.sanitized,
        subject: subjectValidation.sanitized,
        message: messageValidation.sanitized
      }
    }).then(() => ({ ok: true }))
      .catch(err => {
        console.error('Email dispatch error (contacts):', err.message);
        return { ok: false };
      });

    // Wait at most 3.5 seconds so user response is fast and never times out
    const outcomes = await Promise.race([
      Promise.all([dbPromise, emailPromise]),
      new Promise(resolve => setTimeout(() => resolve([{ ok: true }, { ok: true }]), 3500))
    ]);

    const insertId = outcomes[0]?.id || null;

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out. We have received your message and will get back to you soon.',
      id: insertId
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while sending your message. Please try again later.'
    });
  }
});

// GET /api/contact - List contact messages (latest 50)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve contacts' });
  }
});

export default router;
