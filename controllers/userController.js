const User = require('../models/userModel');

// app scaffolding module

const userController = {};

// get all users
userController.getAllUsers = async (req, res) => {
    res.json({
        message: 'Get all users',
    });
};

// create a user
userController.createUser = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        // search for users
        const isUser = await User.findOne({ username: username }) ? true : false;

        if (isUser) {
            res.status(201).json({
                message: 'User already exists'
            });
            return;
        }

        const user = new User({
            username,
            email,
            password
        });
        const newUser = await user.save();
        res.status(200).json({
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        }); 
    }
};


module.exports = userController;