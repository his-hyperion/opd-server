// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var queueSchema = new mongoose.Schema({
    doctor: { type: Schema.Types.ObjectId, ref: 'doctor' },
    patients: [{ type: Schema.Types.ObjectId, ref: 'newPatient' }]
});

// Return model
module.exports = mongoose.model('queues', queueSchema);