const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');
const AuthController = require('../controllers/authController');
const { checkLogin } = AuthController;


// Get all todos


router.get('/', checkLogin, TodoController.getAllTodos);


// Get todo history
router.get('/history', checkLogin, TodoController.getTodoHistory);

// Get a todo by id

router.get('/:id', TodoController.getTodoById);


// Add a todo

router.post('/create', checkLogin, TodoController.addTodo);

// Update a todo

router.put('/check/:id', TodoController.updateCheckTodo)

router.put('/update', TodoController.updateTodo);

// Delete a todo

router.delete('/:id', TodoController.deleteTodo);


module.exports = router;

