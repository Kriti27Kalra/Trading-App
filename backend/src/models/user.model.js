const db = require("../config/db");

const User = {
  // Create new user (async/await style)
  create: async ({ firstName, lastName, email, password }) => {
    try {
      const [result] = await db.execute(
        "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
        [firstName, lastName, email, password]
      );
      return result;
    } catch (err) {
      console.error("User creation failed:", err);
      throw err;
    }
  },

  // Find user by email (async/await style)
  findByEmail: async (email) => {
    try {
      const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
      return rows[0];
    } catch (err) {
      console.error("findByEmail failed:", err);
      throw err;
    }
  },

  // Get user by ID (callback style)
  getUserById: (id, callback) => {
    db.query(
      "SELECT id, first_name, last_name, email, status FROM users WHERE id = ?",
      [id],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  // Update user by ID (callback style)
  updateUserById: (id, data, callback) => {
    const { first_name, last_name, email } = data;
    db.query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?",
      [first_name, last_name, email, id],
      (err, results) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  },
  updateStatusById: (id, status, callback) => {
  db.query("UPDATE users SET status = ? WHERE id = ?", [status, id], (err, result) => {
    if (err) return callback(err);
    callback(null);
  });
},


  // Get all users (callback style)
  getAllUsers: (callback) => {
    db.query(
      "SELECT id, first_name, last_name, email, status FROM users",
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  }
};

module.exports = User;
