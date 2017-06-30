// Dependencies
var mongoose = require('mongoose');


// Schema
var allergiesSchema = new mongoose.Schema({
    allergy: String,
    status: String,
    remark: String,   
    patientID: String
});

// Return model
module.exports = mongoose.model('allergy', allergiesSchema);