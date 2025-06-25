const db = require('../config/db');

// Create notification for admin
exports.createNotification = async (req, res) => {
  const { content, status } = req.body;

  if (!content) return res.status(400).json({ message: "Content is required" });

  try {
    const [result] = await db.promise().query(
      "INSERT INTO notification (content, status) VALUES (?, ?)",
      [content, status || "active"]
    );

    res.status(201).json({ message: "Notification created", id: result.insertId });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all notifications for admin
exports.getAllNotificationsForAdmin = async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      'SELECT * FROM notification ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching notifications:", err);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};


// Update a notification by ID
exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { content, status } = req.body;

  if (!content || !status) return res.status(400).json({ message: "Content and status required" });

  try {
    const [result] = await db.promise().query(
      "UPDATE notification SET content = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
      [content, status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.json({ message: "Notification updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single notification by ID
exports.getNotificationById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.promise().query("SELECT * FROM notification WHERE id = ?", [id]);

    if (rows.length === 0) return res.status(404).json({ message: "Notification not found" });

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching notification:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




exports.getActiveNotifications = async (req, res) => {
  try {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM notification WHERE status = 'active' ORDER BY created_at DESC");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
