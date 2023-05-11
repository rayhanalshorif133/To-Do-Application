const express = require('express');
const Todo = require('../models/todoModel');
const router = express.Router();
const todoController = require('../controllers/todoController');


// Get all todos

router.get('/', async (req, res) => {

    const todos = await Todo.find({});
    res.status(200).json({
        data: todos,
        message: 'Get all todos'
    });
});

// Get a todo by id

router.get('/:id', async (req, res) => {});

// Add a todo

router.post('/create', async (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({
        title,
        description
    });
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
});

// Update a todo

router.put('/:id', async (req, res) => {});

// Delete a todo

router.delete('/:id', async (req, res) => {});


module.exports = router;

