const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();



// Get all users
router.post('/login', AuthController.loginUser);

// create a user

// forgot password
router.post('/forgot/check-email', AuthController.checkEmail);

// forgot password
router.post('/forgot/new-password', AuthController.setNewPassword);

module.exports = router;