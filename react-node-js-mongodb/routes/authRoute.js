const express = require('express');
const AuthController = require('../controllers/authController');
const { loginUser, authUserInfo, checkEmail, setNewPassword, checkLogin } = AuthController;
const router = express.Router();



// Get all users
router.post('/login', loginUser);

// Get login user info
router.get('/auth/user-info', checkLogin, authUserInfo);

// create a user

// forgot password
router.post('/forgot/check-email', checkEmail);

// forgot password
router.post('/forgot/new-password', setNewPassword);

module.exports = router;