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




module.exports = authController;