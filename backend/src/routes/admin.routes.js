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
router.put('/users/:id/status', adminController.updateUserStatus);

// Custom user edit route
router.get("/userslist/userediting/:id", adminController.getUserById);
router.put("/userslist/userediting/:id", adminController.updateUserById);
router.get('/team-count/:referCode', adminController.getTeamCountByReferCode);
router.get("/userdashboard/:identifier", adminController.getUserByIdOrReferCode);



module.exports = router;
