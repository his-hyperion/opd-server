// Dependencies
var mongoose = require('mongoose');

// Schema
var frequencySchema = new mongoose.Schema({
    frequencyValue: String,    
});

// Return model
module.exports = mongoose.model('frequencySchema', frequencySchema);