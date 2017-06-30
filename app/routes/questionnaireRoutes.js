var express = require('express');
var router = express.Router();

// Models
var Questionnaire = require('../models/questionnaire');

router.route('/')
    .get(function (req, res) {
        Questionnaire.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });
    })
    .post(function (req, res) {
        var questionnaire = new (Questionnaire);
        questionnaire.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })

module.exports = router;