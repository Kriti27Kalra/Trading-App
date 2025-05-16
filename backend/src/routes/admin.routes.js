const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Admin login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const admin = results[0];
    res.json({ success: true, admin });
  });
});

// Get all users
router.get("/users", (req, res) => {
  const sql = "SELECT id, first_name, last_name, email FROM users ORDER BY id ASC";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    res.json({ success: true, users: results });
  });
});

// Get a specific user by ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT id, first_name, last_name, email FROM users WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: results[0] });
  });
});

// Update a user by ID
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;

  const sql = "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?";
  db.query(sql, [first_name, last_name, email, id], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    res.json({ success: true, message: "User updated successfully" });
  });
});

module.exports = router;
