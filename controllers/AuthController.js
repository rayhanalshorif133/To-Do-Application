const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const privateKey = process.env.JWT_TOKEN_SECRET;

// app scaffolding module
const authController = {};

authController.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(200).json({
            message: 'User not found',
        });
    }

    // // check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        var token = jwt.sign({
            data: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            }
        }, privateKey, { expiresIn: '1h' });
        return res.status(200).json({
            token: token,
            message: 'Login successful',
        });
    } else {
        return res.status(200).json({
            message: 'Credentials not match',
        });
    }
};


authController.checkLogin = async (req, res, next) => {

    var token = req.headers.authorization;
<<<<<<< HEAD
    if (token == undefined) {
=======

    if(token == undefined){
>>>>>>> 3a5f67be5d669d21109cf6c7cc4a83ab3035c996
        return res.status(200).json({
            message: 'No token provided.',
            status: false,
        });
<<<<<<< HEAD
    } else {
        token = token.split(' ')[1];
        jwt.verify(token, privateKey, function (err, decoded) {
            if (!err && decoded) {
                console.log(decoded);
=======
    }else{
        token = token.split(' ')[1];
        jwt.verify(token, privateKey, function (err, decoded) {
            if(!err && decoded){
                const userInfo = {
                    _id: decoded.data._id,
                    username: decoded.data.username,
                    email: decoded.data.email,
                    role: decoded.data.role,
                }
                req.user = userInfo;
>>>>>>> 3a5f67be5d669d21109cf6c7cc4a83ab3035c996
                next();
            } else {
                return res.status(200).json({
                    message: 'Invalid token',
                    status: false,
                });
            }
        });
    }
}


authController.checkEmail = async (req, res) => {

    const { email } = req.body.email;
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(200).json({
            message: 'User not found',
            status: false,
        });
    } else {
        return res.status(200).json({
            email: email,
            message: 'User has been found ✔',
            status: true,
        });
    }
};

authController.setNewPassword = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(200).json({
            message: 'User not found',
            status: false,
        });
    } else {
        const newPassword = await bcrypt.hash(password, 10);
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { password: newPassword },
            { new: true }
        );
        res.json({ user: updatedUser, message: 'Password updated successfully', status: true });
    }
};


authController.authUserInfo = async (req, res) => {
    res.status(200).json({
        message: 'User info',
    });
};




module.exports = authController;