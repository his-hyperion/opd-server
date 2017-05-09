var express = require('express');
var router = express.Router();

// Models
var Questionnaire = require('../models/questionnaire.js');
var NewPatient = require('../models/newPatient');

// REGISTER ROUTES
Questionnaire.methods(['get', 'put', 'post', 'delete']);
Questionnaire.register(router, '/questionnaires');

NewPatient.methods(['get', 'put', 'post', 'delete']);
NewPatient.register(router, '/patients');

// RETURN ROUTER
module.exports = router;