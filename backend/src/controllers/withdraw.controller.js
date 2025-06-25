const db = require("../config/db");

// POST: User withdraw request
exports.requestWithdraw = async (req, res) => {
  const { userId, amount, method, accountDetails } = req.body;

  if (!userId || !amount || !method || !accountDetails) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  if (amount < 20 || amount % 10 !== 0) {
    return res.status(400).json({ success: false, message: "Amount must be at least $20 and in multiples of $10" });
  }

  try {
    const [walletRows] = await db.promise().query("SELECT wallet FROM users WHERE id = ?", [userId]);
    const user = walletRows[0];

    if (!user || user.wallet < amount) {
      return res.status(400).json({ success: false, message: "Insufficient wallet balance" });
    }

    // Deduct balance from users table
    await db.promise().query("UPDATE users SET wallet = wallet - ? WHERE id = ?", [amount, userId]);

    // Insert into withdraw_history
    await db.promise().query(
      "INSERT INTO withdraw_history (user_id, amount, method, account_details) VALUES (?, ?, ?, ?)",
      [userId, amount, method, accountDetails]
    );

    res.status(200).json({ success: true, message: "Withdrawal request submitted" });
  } catch (err) {
    console.error("Withdraw request error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET: User withdraw history
exports.getWithdrawHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM withdraw_history WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to load history" });
  }
};

// Admin: Get all withdrawal requests with refer codes
exports.getAllWithdrawRequests = async (req, res) => {
  try {
    const [rows] = await db.promise().query(`
      SELECT w.*, u.refer_code 
      FROM withdraw_history w
      JOIN users u ON w.user_id = u.id
      ORDER BY w.created_at DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error("Admin fetch error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Admin: Approve a withdrawal
exports.approveWithdrawRequest = async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query("UPDATE withdraw_history SET status = 'approved' WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (err) {
    console.error("Approve error:", err);
    res.status(500).json({ success: false });
  }
};

// Admin: Reject a withdrawal and refund
exports.rejectWithdrawRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const [withdraw] = await db.promise().query("SELECT * FROM withdraw_history WHERE id = ?", [id]);
    const row = withdraw[0];

    if (row.status === "pending") {
      await db.promise().query("UPDATE users SET wallet = wallet + ? WHERE id = ?", [row.amount, row.user_id]);
    }

    await db.promise().query("UPDATE withdraw_history SET status = 'rejected' WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (err) {
    console.error("Reject error:", err);
    res.status(500).json({ success: false });
  }
};
