const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();



// Get all users
router.get('/', (req, res) => {
    res.json({
        message: 'Get all users',
    });
});

// create a user
router.post('/create', UserController.createUser);


module.exports = router;