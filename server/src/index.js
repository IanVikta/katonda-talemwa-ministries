import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { initDb } from './config/initDb.js';

import contactRoutes from './routes/contact.js';
import volunteersRoutes from './routes/volunteers.js';
import sponsorshipsRoutes from './routes/sponsorships.js';
import donationsRoutes from './routes/donations.js';
import careersRoutes from './routes/careers.js';
import exchangeRoutes from './routes/exchange.js';
import prayersRoutes from './routes/prayers.js';
import newsletterRoutes from './routes/newsletter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// Security Headers
app.use(helmet());

// CORS Configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim().replace(/\/$/, ''))
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    // Check if origin matches allowed list or cloudflare / railway domains
    const isAllowed = allowedOrigins.some(allowed => origin === allowed) ||
      origin.endsWith('.pages.dev') ||
      origin.endsWith('.railway.app') ||
      origin.includes('localhost');

    if (isAllowed) {
      return callback(null, true);
    } else {
      console.warn(`CORS blocked request from origin: ${origin}`);
      return callback(new Error('Blocked by CORS'));
    }
  },
  credentials: true
}));

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoints (Railway requirement)
app.get(['/health', '/api/health'], (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Root / Welcome Endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Katonda Talemwa Ministries API',
    version: '1.0.0',
    status: 'online',
    endpoints: [
      '/health',
      '/api/contact',
      '/api/volunteers',
      '/api/sponsorships',
      '/api/donations',
      '/api/careers',
      '/api/exchange-inquiries',
      '/api/prayers',
      '/api/newsletter'
    ]
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/volunteers', volunteersRoutes);
app.use('/api/sponsorships', sponsorshipsRoutes);
app.use('/api/donations', donationsRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/exchange-inquiries', exchangeRoutes);
app.use('/api/prayers', prayersRoutes);
app.use('/api/newsletter', newsletterRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

// Start Server & Auto-Initialize Database
async function startServer() {
  try {
    await initDb();
    app.listen(PORT, HOST, () => {
      console.log(`🚀 KTM Backend Server running on http://${HOST}:${PORT}`);
      console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (err) {
    console.error('Failed to initialize database on startup:', err.message);
    // Still start server so Railway health checks don't instantly kill container during DB spin-up
    app.listen(PORT, HOST, () => {
      console.log(`⚠️ KTM Backend Server running with DB warnings on http://${HOST}:${PORT}`);
    });
  }
}

startServer();
