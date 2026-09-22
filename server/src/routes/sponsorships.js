import { Router } from 'express';
import pool from '../config/db.js';
import { validateName, validateEmail } from '../utils/validation.js';
import { sendNotification } from '../services/mailer.js';

const router = Router();

// POST /api/sponsorships - Record a sponsorship pledge
router.post('/', async (req, res) => {
  try {
    const { childId, childName, sponsorName, sponsorEmail, amount } = req.body;

    const childNameCheck = validateName(childName, 'Child name', true);
    if (!childNameCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: childNameCheck.error
      });
    }

    const sponsorNameCheck = validateName(sponsorName, 'Sponsor name', true);
    if (!sponsorNameCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: sponsorNameCheck.error
      });
    }

    const sponsorEmailCheck = validateEmail(sponsorEmail, true);
    if (!sponsorEmailCheck.isValid) {
      return res.status(400).json({
        success: false,
        error: sponsorEmailCheck.error
      });
    }

    const pledgeAmount = Number(amount) || 38.00;

    const [result] = await pool.execute(
      'INSERT INTO sponsorships (child_id, child_name, sponsor_name, sponsor_email, amount, frequency, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        childId ? String(childId).trim() : null,
        childNameCheck.sanitized,
        sponsorNameCheck.sanitized,
        sponsorEmailCheck.sanitized,
        pledgeAmount,
        'monthly',
        'pledged'
      ]
    );

    // Send email notification to website owners
    sendNotification({
      type: 'sponsorship',
      data: {
        childId: childId ? String(childId).trim() : null,
        childName: childNameCheck.sanitized,
        sponsorName: sponsorNameCheck.sanitized,
        sponsorEmail: sponsorEmailCheck.sanitized,
        amount: pledgeAmount
      }
    }).catch(err => console.error('Email dispatch error:', err));

    return res.status(201).json({
      success: true,
      message: 'Sponsorship pledge recorded successfully.',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error recording sponsorship:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while saving your sponsorship details.'
    });
  }
});

// GET /api/sponsorships - List sponsorships
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM sponsorships ORDER BY created_at DESC LIMIT 50');
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching sponsorships:', error);
    return res.status(500).json({ success: false, error: 'Failed to retrieve sponsorships' });
  }
});

export default router;
