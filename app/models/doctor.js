// Dependencies
var mongoose = require('mongoose');

// Schema
var doctorSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    specialization: String
});

// Return model
module.exports = mongoose.model('doctor', doctorSchema, 'doctor');