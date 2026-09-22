import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates MySQL connection configuration compatible with:
 * 1. Railway Production URL (DATABASE_URL or MYSQL_URL)
 * 2. Railway individual environment variables (MYSQLHOST, etc.)
 * 3. Local Laragon MySQL (DB_HOST, DB_USER, etc.)
 */
function getDbConfig() {
  const connectionUrl = process.env.DATABASE_URL || process.env.MYSQL_URL;

  if (connectionUrl) {
    return {
      uri: connectionUrl,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    };
  }

  return {
    host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
    port: Number(process.env.MYSQLPORT || process.env.DB_PORT || 3306),
    user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
    password: process.env.MYSQLPASSWORD !== undefined ? process.env.MYSQLPASSWORD : (process.env.DB_PASSWORD || ''),
    database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'katonda_talemwa',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  };
}

const config = getDbConfig();
const pool = config.uri ? mysql.createPool(config.uri) : mysql.createPool(config);

export async function query(sql, params = []) {
  const [results] = await pool.execute(sql, params);
  return results;
}

export default pool;
