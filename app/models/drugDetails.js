// Dependencies
var mongoose = require('mongoose');

// Schema
var drugDetailsSchema = new mongoose.Schema({
    drugsList: String,
    dosageList: String,
    frequencyList: String,
    periodList: String


});

// Return model
module.exports = mongoose.model('drugDetails', drugDetailsSchema);