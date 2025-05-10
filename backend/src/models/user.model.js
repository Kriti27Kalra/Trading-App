const db = require("../config/db");

const User = {
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

  findByEmail: async (email) => {
    try {
      const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
      return rows[0];
    } catch (err) {
      console.error("findByEmail failed:", err);
      throw err;
    }
  }
};

module.exports = User;
