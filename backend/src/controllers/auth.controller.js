const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if email already exists
    const [existing] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.promise().query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId,
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });


    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};