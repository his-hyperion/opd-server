var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionnaireSchema = new Schema({
    name: String,
    relatedTo: String,
    
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);