const db = require("../config/db");

const getProfile = async (req, res) => {
  const userId = req.query.userId;
  try {
    const [user] = await db.execute("SELECT * FROM users WHERE id = ?", [userId]);
    if (user.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user: user[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getProfile };
