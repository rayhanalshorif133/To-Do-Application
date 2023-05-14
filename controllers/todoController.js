const Todo = require('../models/todoModel');

// app scaffolding module

const todoController = {};


// get all todos

todoController.getAllTodos = async (req, res) => {
    const todos = await Todo.find({
        status: 'pending'
    }).sort({ _id: -1 });
    res.status(200).json({
        data: todos,
        message: 'Get all todos'
    });
};


// get a todo by id
todoController.getTodoById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
};

// get a todo history
todoController.getTodoHistory = async (req, res) => {
    const todos = await Todo.find({
        status: 'completed'
    }).sort({ _id: -1 });


    res.status(200).json({
        data: todos,
        message: 'Get all todos'
    });
};


// add a todo
todoController.addTodo = async (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({
        title,
        description
    });
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
};

// update a todo
todoController.updateCheckTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.status = 'completed';
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
};



// delete a todo
todoController.deleteTodo = async (req, res) => {

    const { id } = req.params;

    console.log(id);
    const deletedTodo = await Todo.findByIdAndRemove(id);
    res.status(200).json(deletedTodo);
};


module.exports = todoController;