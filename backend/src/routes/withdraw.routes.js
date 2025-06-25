const express = require("express");
const router = express.Router();
const withdrawController = require("../controllers/withdraw.controller");

// User routes
router.post("/request", withdrawController.requestWithdraw);
router.get("/history/:userId", withdrawController.getWithdrawHistory);
router.get("/admin/requests", withdrawController.getAllWithdrawRequests);
router.put("/admin/approve/:id", withdrawController.approveWithdrawRequest);
router.put("/admin/reject/:id", withdrawController.rejectWithdrawRequest);


module.exports = router;
