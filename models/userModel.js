const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [20, 'Username must be at most 20 characters long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Email must be at least 3 characters long'],
        maxlength: [50, 'Email must be at most 50 characters long'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        title : {
            type: String,
            required: false,
        },
        description : {
            type: String,
            required: false,
        },
        date : {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            default: 'pending'
        }
    },
],
});

module.exports = mongoose.model('User', userSchema);

// Path: models\todoModel.js