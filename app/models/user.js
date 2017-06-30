// Dependencies
var mongoose = require('mongoose');

// Schema
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    acc_type: String
});

// Return model
module.exports = mongoose.model('user', userSchema);