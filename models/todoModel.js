const mongoose = require('mongoose');
const Schema = mongoose.Schema({
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
});

const Todo = mongoose.model('Todo', Schema);

module.exports = Todo;