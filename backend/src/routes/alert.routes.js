const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alert.controller');

// Admin creates alert
router.post('/', alertController.createAlert);

// Users fetch alerts
router.get('/', alertController.getAllAlerts);

// Update alert 
router.get('/:id', alertController.getAlertById);     // 👈 Fetch one alert
router.put('/:id', alertController.updateAlert);      // 👈 Update alert


module.exports = router;
