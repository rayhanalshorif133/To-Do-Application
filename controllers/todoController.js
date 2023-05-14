const Todo = require('../models/todoModel');

// app scaffolding module

const TodoController = {};


// get all todos

TodoController.getAllTodos = async (req, res) => {
    const todos = await Todo.find({
        status: 'pending'
    }).sort({ _id: -1 });
    res.status(200).json({
        data: todos,
        message: 'Get all todos'
    });
};


// get a todo by id
TodoController.getTodoById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
};

// get a todo history
TodoController.getTodoHistory = async (req, res) => {
    const todos = await Todo.find({
        status: 'completed'
    }).sort({ _id: -1 });


    res.status(200).json({
        data: todos,
        message: 'Get all todos'
    });
};


// add a todo
TodoController.addTodo = async (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({
        title,
        description
    });
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
};


// update a todo
TodoController.updateTodo = async (req, res) => {
    const { id, updateTitle, updateDescription } = req.body;
    // find and update the todo
    Todo.findById(id).then(todo => {
        todo.title = updateTitle? updateTitle : todo.title;
        todo.description = updateDescription? updateDescription : todo.description;
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
TodoController.updateCheckTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.status = 'completed';
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
};



// delete a todo
TodoController.deleteTodo = async (req, res) => {

    const { id } = req.params;

    console.log(id);
    const deletedTodo = await Todo.findByIdAndRemove(id);
    res.status(200).json(deletedTodo);
};


module.exports = TodoController;