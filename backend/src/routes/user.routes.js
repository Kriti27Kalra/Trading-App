const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { getUserByIdOrReferCode } = require("../controllers/user.controller");


router.get("/profile", isAuthenticated, userController.getProfile);
router.put("/profile", isAuthenticated, userController.updateProfile);
router.get("/team/:refer_code", userController.getReferredUsers);
router.get('/status-counts', userController.getUserStatusCounts);
router.get('/by-refcode/:referCode', userController.getUserByReferCode);
// backend/src/routes/user.routes.js
router.get("/users/:identifier",  getUserByIdOrReferCode);



module.exports = router;