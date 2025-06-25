const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// ✅ Admin: create notification
router.post('/', notificationController.createNotification);

// ✅ User: get only active notifications (this MUST come before /:id)
router.get('/active', notificationController.getActiveNotifications);

// ✅ Admin: get all (active + inactive)
router.get('/', notificationController.getAllNotificationsForAdmin);

// ✅ Get single notification by ID
router.get('/:id', notificationController.getNotificationById);

// ✅ Admin: update notification
router.put('/:id', notificationController.updateNotification);

module.exports = router;
