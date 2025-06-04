const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  const { firstName, lastName, email, password, referred_by_code } = req.body;

  try {
    if (!firstName || !email || !password || !referred_by_code) {
      return res.status(400).json({ message: 'All fields including referred_by_code are required' });
    }

    // Check if email exists
    const [existing] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Validate referred_by_code
    const [referrer] = await db.promise().query('SELECT id FROM users WHERE refer_code = ?', [referred_by_code]);
    if (referrer.length === 0) {
      return res.status(400).json({ message: 'Invalid Refer Code' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate unique userId (refer_code)
    const generateUserId = () => `USER${Math.floor(1000 + Math.random() * 9000)}`;

    let userIdCode;
    let isUnique = false;

    while (!isUnique) {
      userIdCode = generateUserId();
      const [existingUser] = await db.promise().query('SELECT id FROM users WHERE refer_code = ?', [userIdCode]);
      if (existingUser.length === 0) isUnique = true;
    }

    // Insert new user with unique refer_code
    const [result] = await db.promise().query(
      'INSERT INTO users (first_name, last_name, email, password, referred_by_code, refer_code, wallet) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword, referred_by_code, userIdCode, 0]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId,
      refer_code: userIdCode,
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
        refer_code: user.refer_code, 
        wallet: user.wallet

      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
