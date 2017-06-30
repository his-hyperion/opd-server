// Dependencies
var mongoose = require('mongoose');


// Schema
var attachmentsSchema = new mongoose.Schema({
    file: String,
    type: String,
    attName: String,    
    description: String,   
    remark: String, 
    attBy: String,         
    patientID: String
});

// Return model
module.exports = mongoose.model('attchment', attachmentsSchema);