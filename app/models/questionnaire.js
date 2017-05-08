// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var questionnaireSchema = new mongoose.Schema({
    name: String
});

// Return model
module.exports = restful.model('Nodemcus', questionnaireSchema);