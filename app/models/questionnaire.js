// Dependencies
var mongoose = require('mongoose');

// Schema
var questionnaireSchema = new mongoose.Schema({
    name: String,
    relatedTo: String,
    remarks: String,
    questions: Array
});

// Return model
module.exports = mongoose.model('questionnaires', questionnaireSchema);