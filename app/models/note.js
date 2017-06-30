// Dependencies
var mongoose = require('mongoose');


// Schema
var notesSchema = new mongoose.Schema({
    note: String,
    dateTime: Date,   
    patientID: String
});

// Return model
module.exports = mongoose.model('note', notesSchema);