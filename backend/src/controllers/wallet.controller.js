const db = require('../config/db');

// Helper: get numeric user id by refer_code
async function getNumericUserIdByReferCode(referCode) {
  const [rows] = await db.promise().query('SELECT id FROM users WHERE refer_code = ?', [referCode]);
  if (rows.length === 0) throw new Error(`User not found for refer_code: ${referCode}`);
  return rows[0].id;
}

// Get all users with wallet balances
exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.promise().query(
      'SELECT id, first_name, last_name, email, refer_code, wallet FROM users'
    );
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};
// reward referrer
exports.rewardReferrer = async (referred_by_code, newUserId) => {
  try {
    const [referrer] = await db.promise().query(
      'SELECT id FROM users WHERE refer_code = ?',
      [referred_by_code]
    );

    if (referrer.length === 0) {
      throw new Error('Referrer not found');
    }

    const referrerId = referrer[0].id;

    // Update referrer's wallet
    await db.promise().query(
      'UPDATE users SET wallet = wallet + 5 WHERE id = ?',
      [referrerId]
    );

    // Log to wallet_history with from_user_id = new user
    await db.promise().query(
      'INSERT INTO wallet_history (`from`, to_refer_code, amount, type, from_user_id, trigger_user_code) VALUES (?, ?, ?, ?, ?, ?)',
      ['system', referred_by_code, 5, 'add', newUserId, referred_by_code]
    );

  } catch (err) {
    console.error('Reward referrer error:', err);
  }
};


// Add money to user's wallet
exports.addToWallet = async (req, res) => {
  const { refer_code, amount } = req.body;

  try {
    const numericId = await getNumericUserIdByReferCode(refer_code);

    await db.promise().query('UPDATE users SET wallet = wallet + ? WHERE id = ?', [amount, numericId]);
    await db.promise().query(
      'INSERT INTO wallet_history (`from`, to_user_id, amount, type) VALUES (?, ?, ?, ?)',
      ['admin', numericId, amount, 'add']
    );
    res.json({ message: 'Amount added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Failed to add amount' });
  }
};

// Subtract money from user's wallet
exports.subtractFromWallet = async (req, res) => {
  const { refer_code, amount } = req.body;

  try {
    const numericId = await getNumericUserIdByReferCode(refer_code);

    await db.promise().query('UPDATE users SET wallet = wallet - ? WHERE id = ?', [amount, numericId]);
    await db.promise().query(
      'INSERT INTO wallet_history (`from`, to_user_id, amount, type) VALUES (?, ?, ?, ?)',
      ['admin', numericId, amount, 'subtract']
    );
    res.json({ message: 'Amount subtracted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Failed to subtract amount' });
  }
};

// Get wallet history for a user
exports.getWalletHistory = async (req, res) => {
  const { refer_code } = req.params;

  try {
    const [history] = await db.promise().query(
      `SELECT 
         wh.*, 
         u.id AS from_user_id, 
         u.refer_code AS trigger_user_code
       FROM wallet_history wh
       LEFT JOIN users u ON wh.from_user_id = u.id
       WHERE wh.to_refer_code = ?
       ORDER BY wh.created_at DESC`,
      [refer_code]
    );

    console.log("Sending wallet history:", history);
    res.json(history);
  } catch (error) {
    console.error('Error fetching wallet history:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin wallet transaction (add or subtract) using refer codes
exports.walletTransaction = async (req, res) => {
  console.log('Request body:', req.body);
  const { to_refer_code, amount, type } = req.body;

  if (!to_refer_code || !amount || !type) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const fromValue = 'admin';
    const createdAt = new Date();
    const numericToId = await getNumericUserIdByReferCode(to_refer_code);

    if (type === 'add') {
      await db.promise().query('UPDATE users SET wallet = wallet + ? WHERE id = ?', [amount, numericToId]);
    } else if (type === 'subtract') {
      await db.promise().query('UPDATE users SET wallet = wallet - ? WHERE id = ?', [amount, numericToId]);
    } else {
      return res.status(400).json({ message: 'Invalid transaction type' });
    }

    await db.promise().query(
      'INSERT INTO wallet_history (`from`, to_refer_code, amount, type, created_at) VALUES (?, ?, ?, ?, ?)',
      [fromValue, to_refer_code, amount, type, createdAt]
    );

    res.json({ success: true, message: 'Transaction processed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Transaction failed' });
  }
};


// Get wallet balance by refer_code
exports.getWalletBalance = async (req, res) => {
  const { refer_code } = req.params;

  try {
    const [rows] = await db
      .promise()
      .query('SELECT wallet FROM users WHERE refer_code = ?', [refer_code]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ wallet: rows[0].wallet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Failed to fetch wallet balance' });
  }
};
// Get total wallet balance of all users
exports.getTotalWalletBalance = async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT SUM(wallet) AS totalWallet FROM users');

    const totalWallet = rows[0].totalWallet || 0; // handle null case

    res.json({ success: true, totalWallet });
  } catch (error) {
    console.error('Failed to fetch total wallet balance:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch total wallet balance' });
  }
};

// Get admin wallet transaction history (transactions made by admin)
exports.getAdminWalletHistory = async (req, res) => {
  try {
    const [rows] = await db.promise().query(`
      SELECT id, \`from\`, to_refer_code, amount, type, created_at
      FROM wallet_history
      WHERE \`from\` = 'admin'
      ORDER BY created_at DESC
    `);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching admin wallet history:", error);
    res.status(500).json({ message: "Failed to fetch admin wallet history" });
  }
};



