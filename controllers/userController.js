const User = require('../models/userModel');
const bcrypt = require("bcrypt");
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

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);
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
            hashPassword
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