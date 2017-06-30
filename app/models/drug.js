// Dependencies
var mongoose = require('mongoose');

// Schema
var drugSchema = new mongoose.Schema({
    drugName: String,    
});

// Return model
module.exports = mongoose.model('drugSchema', drugSchema);