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
    const token = req.headers.authorization;
    console.log(token);
    // if (token) {
    //  jwt.verify(token, privateKey, function (err, decoded) {
    //   if (err) {
    //    return res.status(200).json({
    //     message: 'Invalid token',
    //    });
    //   } else {
    //    req.decoded = decoded;
    //    next();
    //   }
    //  });
    // } else {
    //  return res.status(200).json({
    //   message: 'No token provided.',
    //  });
    // }
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




module.exports = authController;