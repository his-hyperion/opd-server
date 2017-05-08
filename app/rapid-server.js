var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost:27017/his_opd');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log('opd-server is listening on port', port);