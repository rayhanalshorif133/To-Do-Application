const DBConnection = require('../connection');
const Todo = require('../models/todoModel');
const User = require('../models/userModel');

// app scaffolding module

const todoController = {};


// get all todos

todoController.getAllTodos = async (req, res) => {

    const user = await User.findById(req.user._id).populate('todos');

    if (user.todos.length > 0) {
        // get all todos by user.todos
        const todos = await Todo.find({
            _id: { $in: user.todos },
            status: 'pending'
        }).sort({ _id: -1 });
        res.status(200).json({
            data: todos,
            message: 'Get all todos',
            status: true
        });
    } else {
        res.status(200).json({
            data: [],
            message: 'Get all todos',
            status: false
        });
    }
};


// get a todo by id
todoController.getTodoById = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
};

// get a todo history
todoController.getTodoHistory = async (req, res) => {
    const user = await User.findById(req.user._id).populate('todos');

    if (user.todos.length > 0) {
        // get all todos by user.todos
        const todos = await Todo.find({
            _id: { $in: user.todos },
            status: 'completed'
        }).sort({ _id: -1 });
        if (todos.length > 0) {
            res.status(200).json({
                data: todos,
                message: 'Get all todos',
                status: true
            });
        } else {
            res.status(200).json({
                data: [],
                message: 'Get all todos',
                status: false
            });
        }
    } else {
        res.status(200).json({
            data: [],
            message: 'Get all todos',
            status: false
        });
    }
};


// add a todo
todoController.addTodo = async (req, res) => {

    if (DBConnection()) {
        const { title, description } = req.body;
        const todo = new Todo({
            title,
            description,
            user: req.user._id
        });
        const newTodo = await todo.save();
        if (req.user && newTodo) {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.user._id },
                { $push: { todos: newTodo._id } },
                { new: true }
            );
            res.status(200).json({
                todoInformation: {
                    todo: newTodo,
                    user: updateUser
                },
                message: 'Todo is added successfully',
                status: true
            });
        } else {
            res.status(200).json({
                message: 'Server side error',
                status: false
            });
        }

    }

};


// update a todo
todoController.updateTodo = async (req, res) => {
    const { id, updateTitle, updateDescription } = req.body;
    // find and update the todo
    Todo.findById(id).then(todo => {
        todo.title = updateTitle ? updateTitle : todo.title;
        todo.description = updateDescription ? updateDescription : todo.description;
        todo.save().then(() => {
            res.status(200).json({
                todoInformation: todo,
                message: 'Todo is updated successfully'
            });
        }).catch(err => {
            res.status(201).json({
                errorMessage: err,
                message: 'Something went wrong'
            });
        });
    }).catch(err => {
        res.status(201).json({
            errorMessage: err,
            message: 'Something went wrong'
        });
    });


};

// update a todo
todoController.updateCheckTodo = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const todo = await Todo.findById(id);
    todo.status = 'completed';
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
};



// delete a todo
todoController.deleteTodo = async (req, res) => {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndRemove(id);
    res.status(200).json(deletedTodo);
};


module.exports = todoController;