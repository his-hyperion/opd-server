// Dependencies
var mongoose = require('mongoose');


// Schema
var patientExaminationSchema = new mongoose.Schema({
    height: Number,
    weight: Number,
    temp: Number,
    SysBloodPresure: Number,
    DiasBloodPresure: Number
});

// Return model
module.exports = mongoose.model('patientExamination', patientExaminationSchema);