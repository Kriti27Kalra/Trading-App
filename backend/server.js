const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');  // Import the database connection

// Create an instance of Express
const app = express();

// Use middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse incoming JSON requests

// ================== Registration Route ==================
app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  });
});

// ================== Login Route ==================
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const user = results[0];
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
      },
    });
  });
});

// ================== Start the Server ==================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
