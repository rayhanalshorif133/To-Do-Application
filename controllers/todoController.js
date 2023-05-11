const Todo = require('../models/todoModel');

// app scaffolding module

const todoController = {};


// get all todos

todoController.getAllTodos = async (req, res) => {
    res.status(200).json({
        message: 'Get all todos'
    });
};

// get a todo by id

todoController.getTodoById = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Get a todo by id: ${id}`
    });
};

// add a todo

todoController.createTodo = async (req, res) => {
    const { title, description } = req.body;

    const todo = new Todo({
        title,
        description
    });

    const newTodo = await todo.save();
    res.status(200).json(newTodo);
};

// update a todo

todoController.updateTodo = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Update a todo by id: ${id}`
    });
};

// delete a todo

todoController.deleteTodo = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Delete a todo by id: ${id}`
    });
};


module.exports = todoController;