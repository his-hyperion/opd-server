// Dependencies
var mongoose = require('mongoose');


// Schema
var labTestRequestSchema = new mongoose.Schema({
    
    patientHIN: String,
    
    dueDate: String,
    comment: String
});

// Return model
module.exports = mongoose.model('labTestRequest', labTestRequestSchema);