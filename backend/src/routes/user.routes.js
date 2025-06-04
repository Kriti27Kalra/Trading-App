const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");

router.get("/profile", isAuthenticated, userController.getProfile);
router.put("/profile", isAuthenticated, userController.updateProfile);
router.get("/team/:refer_code", userController.getReferredUsers);
router.get('/status-counts', userController.getUserStatusCounts);
router.get('/by-refcode/:referCode', userController.getUserByReferCode);

module.exports = router;
