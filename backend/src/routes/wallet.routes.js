const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');

// Wallet balance by refer_code
router.get('/balance/:refer_code', walletController.getWalletBalance);

// Wallet history by refer_code
router.get('/history/:refer_code', walletController.getWalletHistory);

// Wallet transaction (add or subtract)
router.post('/transaction', walletController.walletTransaction);

// Admin: View all users and wallet balances
router.get('/admin/users', walletController.getAllUsers);
router.get('/admin/wallet/history/:refer_code', walletController.getWalletHistory);
router.get('/total-wallet', walletController.getTotalWalletBalance);
router.get('/admin-history', walletController.getAdminWalletHistory);
module.exports = router;
