const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

// Admin login
router.post("/login", adminController.adminLogin);

// Get all users
router.get("/users", adminController.getAllUsers);

// Get user by ID
router.get("/users/:id", adminController.getUserById);

// Update user by ID
router.put("/users/:id", adminController.updateUserById);

module.exports = router;
