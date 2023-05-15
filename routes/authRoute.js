const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();



// Get all users
router.post('/login', AuthController.loginUser);

// create a user

module.exports = router;