const express = require('express');
const Todo = require('../models/todoModel');
const router = express.Router();
const todoController = require('../controllers/todoController');


// Get all todos

router.get('/', todoController.getAllTodos);

// Get a todo by id

router.get('/:id', todoController.getTodoById);

// Add a todo

router.post('/create', todoController.addTodo);

// Update a todo

router.put('/:id', async (req, res) => { });

// Delete a todo

router.delete('/:id', todoController.deleteTodo);


module.exports = router;

