const userModel = require("../models/user.model");

const login = async (email, password) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    return { success: false, message: "User not found" };
  }
  if (user.password !== password) {
    return { success: false, message: "Invalid password" };
  }
  return { success: true, user };
};

module.exports = { login };
