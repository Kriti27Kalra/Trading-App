const db = require('../config/db');

// create alert for admin
exports.createAlert = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const [result] = await db.promise().query(
      'INSERT INTO alerts (content) VALUES (?)',
      [content]
    );

    return res.status(201).json({ message: "Alert created successfully", alertId: result.insertId });
  } catch (error) {
    console.error("Error creating alert:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get all alerts for user
exports.getAllAlerts = async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      'SELECT id, content, created_at, updated_at FROM alerts ORDER BY created_at DESC'
    );
    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching alerts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
// Update an alert by ID
exports.updateAlert = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) return res.status(400).json({ message: "Content is required" });

  try {
    const [result] = await db.promise().query(
      'UPDATE alerts SET content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [content, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.json({ message: "Alert updated successfully" });
  } catch (error) {
    console.error("Error updating alert:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Get a single alert by ID
exports.getAlertById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.promise().query(
      'SELECT id, content, created_at, updated_at FROM alerts WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching alert by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


