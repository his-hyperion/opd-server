var express = require('express');
var router = express.Router();

// Models
var Questionnaire = require('../models/questionnaire.js');

// REGISTER ROUTES
Questionnaire.methods(['get', 'put', 'post', 'delete']);
Questionnaire.register(router, '/questionnaires');

// RETURN ROUTER
module.exports = router;