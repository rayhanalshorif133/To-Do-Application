/* 
* Title: server.js
* Description: Server file for todo app
* Author: Rayhan Al Shorif
* Date: 11-May-2023
*/


// Dependencies
const express = require('express')
const cors = require('cors')
const dotEnv = require('dotenv')
const app = express()


// Configurations
dotEnv.config();
app.use(cors())
app.use(express.json());


const PORT = process.env.PORT || 3001;




// Import routes
const todoRoute = require('./routes/todoRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const DBConnection = require('./connection')




// Assign routes
app.use('/user', userRoute);
app.use('/user', authRoute);
app.use('/todo', todoRoute);
app.use('/', (req, res) => {
  res.send('Welcome to todo api');
});


// Start server
app.listen(PORT, function () {
  console.log('Server started on port ' + PORT + ' ...');
  DBConnection();
})
