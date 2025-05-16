const db = require("../config/db");

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM admin WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });

    if (results.length === 0) {
      return res.status(401).json({ error: "Admin not found" });
    }

    const admin = results[0];
    if (admin.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    return res.json({ message: "Login successful", email: admin.email });
  });
};
