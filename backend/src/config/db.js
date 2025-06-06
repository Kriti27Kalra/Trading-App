const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

// Create the database connection
const db = mysql.createConnection({
  host: '127.0.0.1',  // Database host (from .env)
  user: process.env.DB_USER,  // Database user (from .env)
  password: process.env.DB_PASSWORD,  // Database password (from .env)
  database: process.env.DB_NAME,  // Database name (from .env)
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
