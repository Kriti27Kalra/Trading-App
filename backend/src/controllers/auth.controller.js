const authService = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.login(email, password);
    res.json(response);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { login };
