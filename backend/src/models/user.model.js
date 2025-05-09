const db = require("../config/db");

const createUser = async (user) => {
  const { firstName, lastName, email, password, phone, referCode, referredBy } = user;
  const [result] = await db.execute(
    "INSERT INTO users (first_name, last_name, email, password, phone, refer_code, referred_by) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstName, lastName, email, password, phone, referCode, referredBy]
  );
  return result;
};

const findByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

const getUserByReferCode = async (referCode) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE referred_by = ?", [referCode]);
  return rows;
};

module.exports = { createUser, findByEmail, getUserByReferCode };
