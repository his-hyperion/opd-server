// Dependencies
var mongoose = require('mongoose');

// Schema
var periodSchema = new mongoose.Schema({
    periodValue: String    
});

// Return model
module.exports = mongoose.model('periodSchema', periodSchema);