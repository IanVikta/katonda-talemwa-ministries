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

    const [result] = await pool.execute(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [
        nameValidation.sanitized,
        emailValidation.sanitized,
        subjectValidation.sanitized,
        messageValidation.sanitized
      ]
    );

    // Send email notification to website owners
    sendNotification({
      type: 'contact',
      data: {
        name: nameValidation.sanitized,
        email: emailValidation.sanitized,
        subject: subjectValidation.sanitized,
        message: messageValidation.sanitized
      }
    }).catch(err => console.error('Email dispatch error:', err));

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out. We have received your message and will get back to you soon.',
      id: result.insertId
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
