const mongoose = require('mongoose');
const dotEnv = require('dotenv');


// Configurations
dotEnv.config();

// Connect to MongoDB
const uri = process.env.ATLAS_URI;

// app scaffolding module
const DBConnection = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => {
      console.log('Connected correctly to MongoDB');
      return true;
    })
    .catch((err) => {
      console.log("DB Connection Error: ")
      return false;
    });
}

module.exports = DBConnection;


