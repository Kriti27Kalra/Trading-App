const Admin = require("../models/admin.model");
const User = require("../models/user.model");

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;
  Admin.findByCredentials(email, password, (err, admin) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, admin });
  });
};



exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    res.json({ success: true, users: results });
  });
};

exports.getUserById = (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: results[0] });
  });
};

exports.updateUserById = (req, res) => {
  User.updateUserById(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    res.json({ success: true, message: "User updated successfully" });
  });
};
