// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var questionnaireSchema = new mongoose.Schema({
    name: String,
    relatedTo: String,
    remarks: String,
    questions: Array
});

// Return model
module.exports = restful.model('questionnaires', questionnaireSchema);