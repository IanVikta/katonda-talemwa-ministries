import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail, validateText } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/careers - Submit job application
router.post('/', async (req, res) => {
  try {
    const { name, email, jobTitle, cvUrl, coverLetter } = req.body;

    const nameCheck = validateName(name, 'Applicant name', true);
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

    const jobTitleCheck = validateText(jobTitle, 'Job title', 2, 100, true);
    if (!jobTitleCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: jobTitleCheck.error
      });
    }

    if (!cvUrl || typeof cvUrl !== 'string' || !cvUrl.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid CV / Resume link.'
      });
    }

    const [result] = await pool.execute(
      'INSERT INTO careers (name, email, job_title, cv_url, cover_letter) VALUES (?, ?, ?, ?, ?)',
      [
        nameCheck.sanitized,
        emailCheck.sanitized,
        jobTitleCheck.sanitized,
        cvUrl.trim(),
        coverLetter ? coverLetter.trim() : null
      ]
    );

    // Send email notification to website owners
    sendNotification({
      type: 'career',
      data: {
        name: nameCheck.sanitized,
        email: emailCheck.sanitized,
        jobTitle: jobTitleCheck.sanitized,
        cvUrl: cvUrl.trim(),
        coverLetter: coverLetter ? coverLetter.trim() : ''
      }
    }).catch(err => console.error('Email dispatch error:', err));

    return res.status(201).json({
      success: true,
      message: 'Your job application has been received. Our HR team will review it shortly.',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error submitting job application:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while submitting your job application.'
    });
  }
});

// GET /api/careers - List job applications
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM careers ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching job applications:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve applications' });
  }
});

export default router;
