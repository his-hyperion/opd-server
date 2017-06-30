var express = require('express');
var router = express.Router();

// Models
var Questionnaire = require('../models/questionnaire.js');
var NewPatient = require('../models/newPatient');
var Drug = require('../models/drug');
var Dosage = require('../models/dosage');
var Frequency = require('../models/frequency');

// REGISTER ROUTES
Questionnaire.methods(['get', 'put', 'post', 'delete']);
Questionnaire.register(router, '/questionnaires');

NewPatient.methods(['get', 'put', 'post', 'delete']);
NewPatient.register(router, '/patients');

Drug.methods(['get', 'put', 'post', 'delete']);
Drug.register(router, '/drugs');

Dosage.methods(['get', 'put', 'post', 'delete']);
Dosage.register(router, '/dosages');

Frequency.methods(['get', 'put', 'post', 'delete']);
Frequency.register(router, '/frequency');



// RETURN ROUTER
module.exports = router;