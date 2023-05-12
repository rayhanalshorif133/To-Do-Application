/* 
* Title: server.js
* Description: Server file for todo app
* Author: Rayhan Al Shorif
* Date: 11-May-2023
*/


// Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const app = express()

// Configurations
dotEnv.config();
app.use(cors())
app.use(express.json());


// Import routes
const todoRoute = require('./routes/todoRoute');


// Connect to MongoDB
const uri = process.env.ATLAS_URI;

async function dbConnection() {

  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => {
      console.log('Connected correctly to MongoDB');
    })
    .catch((err) => console.log("DB Connection Error: "));
}


// Assign routes
app.use('/todo', todoRoute);
app.use('/', (req, res) => {
  res.send('Welcome to todo api');
});


// Start server
app.listen(3001, function () {
  console.log('Server started on port 3001');
  dbConnection();
})
