var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')

var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(5000, function () {
  console.log('Server started on port 5000')
})
