const db = require('../config/db');

// Get all users with wallet balances
exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.promise().query(
      'SELECT id, first_name, last_name, email, wallet FROM users'
    );
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// Add money to user's wallet
exports.addToWallet = async (req, res) => {
  const { userId, amount } = req.body;

  try {
    await db.promise().query('UPDATE users SET wallet = wallet + ? WHERE id = ?', [amount, userId]);
    await db.promise().query(
      'INSERT INTO wallet_history (user_id, amount, type, description) VALUES (?, ?, ?, ?)',
      [userId, amount, 'credit', 'Admin added amount']
    );
    res.json({ message: 'Amount added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add amount' });
  }
};

// Subtract money from user's wallet
exports.subtractFromWallet = async (req, res) => {
  const { userId, amount } = req.body;

  try {
    await db.promise().query('UPDATE users SET wallet = wallet - ? WHERE id = ?', [amount, userId]);
    await db.promise().query(
      'INSERT INTO wallet_history (user_id, amount, type, description) VALUES (?, ?, ?, ?)',
      [userId, amount, 'debit', 'Admin subtracted amount']
    );
    res.json({ message: 'Amount subtracted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to subtract amount' });
  }
};

// Get wallet history for a user
exports.getWalletHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const [history] = await db.promise().query(
      'SELECT * FROM wallet_history WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get wallet history' });
  }
};
