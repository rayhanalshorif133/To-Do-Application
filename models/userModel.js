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
        trim: true,
        minlength: [4, 'Password must be at least 4 characters long'],
        maxlength: [20, 'Password must be at most 20 characters long'],
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
            required: true
        },
        description : {
            type: String,
            required: true
        },
        date : {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            default: 'pending'
        }
    }],
});