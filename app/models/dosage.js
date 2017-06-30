// Dependencies
var mongoose = require('mongoose');

// Schema
var dosageSchema = new mongoose.Schema({
    dosageValue: String,    
});

// Return model
module.exports = mongoose.model('dosageSchema', dosageSchema);