var express = require('express');
var router = express.Router();

// Models
var patientExamination = require('../models/patientExamination');

router.route('/')
    .get(function (req, res) {
        patientExamination.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });        
    })
    .post(function (req, res) {
        var patientexamination = new patientExamination(req.body);
        patientexamination.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })
    
    




module.exports = router;