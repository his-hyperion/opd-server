// Dependencies
var mongoose = require('mongoose');


// Schema
var visitsSchema = new mongoose.Schema({
    complaint: String,
    visitType: String,
    remark: String,
    dateTime: Date,
    doctor: String,   
    patientID: String
});

// Return model
module.exports = mongoose.model('visit', visitsSchema);