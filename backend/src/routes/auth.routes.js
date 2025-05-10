const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { registerValidator, validateRegistration } = require("../utils/validator");

// Register route with validation
router.post("/register", registerValidator, validateRegistration, authController.register);

// Login route
router.post("/login", authController.login);

module.exports = router;
