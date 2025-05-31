const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');

// Admin: View all users and their wallet balances
router.get('/admin/users', walletController.getAllUsers);

// Admin: Add to wallet
router.post('/admin/add', walletController.addToWallet);

// Admin: Subtract from wallet
router.post('/admin/subtract', walletController.subtractFromWallet);

// Admin/User: Get wallet history by userId
router.get('/history/:userId', walletController.getWalletHistory);

module.exports = router;
