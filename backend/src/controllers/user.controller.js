const db = require("../config/db");

const getProfile = async (req, res) => {
  try {
    const email = req.user?.email; // safer access

    if (!email) {
      return res.status(400).json({ success: false, message: "Email not provided in token" });
    }

    const [user] = await db.promise().query("SELECT id, first_name, last_name, email FROM users WHERE email = ?", [email]);

    if (user.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: user[0] });
  } catch (err) {
    console.error("Error in getProfile:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getProfile };
