-- Katonda Talemwa Ministries - MySQL Database Schema
-- Compatible with local Laragon MySQL and Railway MySQL

CREATE DATABASE IF NOT EXISTS `katonda_talemwa`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `katonda_talemwa`;

-- 1. Contacts Table (Contact Us Form)
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Volunteers Table (Volunteer Application Form)
CREATE TABLE IF NOT EXISTS `volunteers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `country` VARCHAR(150) NOT NULL,
  `role` VARCHAR(150) NOT NULL,
  `duration` VARCHAR(100) NOT NULL,
  `message` TEXT NULL,
  `status` VARCHAR(50) DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Sponsorships Table (Child Sponsorship Pledges)
CREATE TABLE IF NOT EXISTS `sponsorships` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `child_id` VARCHAR(100) NULL,
  `child_name` VARCHAR(255) NOT NULL,
  `sponsor_name` VARCHAR(255) NOT NULL,
  `sponsor_email` VARCHAR(255) NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL DEFAULT 38.00,
  `frequency` VARCHAR(50) DEFAULT 'monthly',
  `status` VARCHAR(50) DEFAULT 'pledged',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Donations Table (Donation Pledges / Records)
CREATE TABLE IF NOT EXISTS `donations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `donor_name` VARCHAR(255) NULL,
  `donor_email` VARCHAR(255) NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `frequency` ENUM('one-time', 'monthly') NOT NULL DEFAULT 'one-time',
  `designation` VARCHAR(255) NOT NULL DEFAULT 'Where Most Needed (General Fund)',
  `status` VARCHAR(50) DEFAULT 'pledged',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Careers Table (Job Application Submissions)
CREATE TABLE IF NOT EXISTS `careers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `job_title` VARCHAR(255) NOT NULL,
  `cv_url` VARCHAR(500) NOT NULL,
  `cover_letter` TEXT NULL,
  `status` VARCHAR(50) DEFAULT 'submitted',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Exchange Inquiries Table (Mission & Exchange Trips)
CREATE TABLE IF NOT EXISTS `exchange_inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `group_type` VARCHAR(100) NOT NULL,
  `team_size` VARCHAR(100) NULL,
  `preferred_date` VARCHAR(100) NULL,
  `message` TEXT NULL,
  `status` VARCHAR(50) DEFAULT 'inquiry',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Prayers Table (Prayer Requests)
CREATE TABLE IF NOT EXISTS `prayers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `request` TEXT NOT NULL,
  `status` VARCHAR(50) DEFAULT 'received',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `is_active` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
