import mysql from 'mysql2/promise';
import pool from './db.js';

export async function initDb() {
  console.log('🔄 Initializing database & tables...');

  // 1. If running locally without DATABASE_URL, ensure database exists
  const connectionUrl = process.env.DATABASE_URL || process.env.MYSQL_URL;
  if (!connectionUrl) {
    try {
      const dbName = process.env.DB_NAME || 'katonda_talemwa';
      const rootConn = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || ''
      });
      await rootConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
      await rootConn.end();
      console.log(`✅ Database '${dbName}' verified/created.`);
    } catch (err) {
      console.warn('⚠️ Note on database auto-creation:', err.message);
    }
  }

  // 2. Ensure all 8 tables exist
  const tableDefinitions = [
    `CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS volunteers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      country VARCHAR(150) NOT NULL,
      role VARCHAR(150) NOT NULL,
      duration VARCHAR(100) NOT NULL,
      message TEXT NULL,
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS sponsorships (
      id INT AUTO_INCREMENT PRIMARY KEY,
      child_id VARCHAR(100) NULL,
      child_name VARCHAR(255) NOT NULL,
      sponsor_name VARCHAR(255) NOT NULL,
      sponsor_email VARCHAR(255) NOT NULL,
      amount DECIMAL(10,2) NOT NULL DEFAULT 38.00,
      frequency VARCHAR(50) DEFAULT 'monthly',
      status VARCHAR(50) DEFAULT 'pledged',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS donations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      donor_name VARCHAR(255) NULL,
      donor_email VARCHAR(255) NULL,
      amount DECIMAL(10,2) NOT NULL,
      frequency ENUM('one-time', 'monthly') NOT NULL DEFAULT 'one-time',
      designation VARCHAR(255) NOT NULL DEFAULT 'Where Most Needed (General Fund)',
      status VARCHAR(50) DEFAULT 'pledged',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS careers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      job_title VARCHAR(255) NOT NULL,
      cv_url VARCHAR(500) NOT NULL,
      cover_letter TEXT NULL,
      status VARCHAR(50) DEFAULT 'submitted',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS exchange_inquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(100) NOT NULL,
      group_type VARCHAR(100) NOT NULL,
      team_size VARCHAR(100) NULL,
      preferred_date VARCHAR(100) NULL,
      message TEXT NULL,
      status VARCHAR(50) DEFAULT 'inquiry',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS prayers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      request TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'received',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,

    `CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      is_active TINYINT(1) DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`
  ];

  try {
    for (const sql of tableDefinitions) {
      await pool.query(sql);
    }
    console.log('✅ All 8 database tables verified and ready.');
  } catch (err) {
    console.error('❌ Error initializing database tables:', err.message);
    throw err;
  }
}
