const db = require("../config/db");

// GET profile using email from token
const getProfile = async (req, res) => {
  try {
    const email = req.user?.email;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email not provided in token" });
    }

    const [user] = await db.promise().query(
      "SELECT id, first_name, last_name, email FROM users WHERE email = ?",
      [email]
    );

    if (user.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: user[0] });
  } catch (err) {
    console.error("Error in getProfile:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// PUT update profile
const updateProfile = async (req, res) => {
  try {
    const email = req.user?.email;
    const { first_name, last_name, email: newEmail } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email not provided in token" });
    }

    if (newEmail && newEmail !== email) {
      const [existing] = await db.promise().query(
        "SELECT id FROM users WHERE email = ?",
        [newEmail]
      );
      if (existing.length > 0) {
        return res.status(400).json({ success: false, message: "Email already in use" });
      }
    }

    const [result] = await db.promise().query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE email = ?",
      [first_name, last_name, newEmail || email, email]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (err) {
    console.error("Error in updateProfile:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET /api/team/:refer_code
const getReferredUsers = async (req, res) => {
  const { refer_code } = req.params;

  try {
    const [users] = await db.promise().query(
      'SELECT id, first_name, last_name, email FROM users WHERE referred_by_code = ?',
      [refer_code]
    );
    res.json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getReferredUsers
};
