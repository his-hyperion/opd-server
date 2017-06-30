// Dependencies
var mongoose = require('mongoose');


// Schema
var newPatiensSchema = new mongoose.Schema({
    hin: String,
    title: String,
    firstName: String,
    lastName: String,
    dob: Date,
    gender: String,
    civilStatus: String,
    nic: String,
    passport: String,
    citizenship: String,
    language: String,
    bloodGroup: String,
    address: String,
    phone: String,
    mobile: String,
    remark: String
});

// Return model
module.exports = mongoose.model('newPatient', newPatiensSchema);