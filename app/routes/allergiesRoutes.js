var express = require('express');
var router = express.Router();

// Models
var Allergies = require('../models/allergies');

router.route('/')
    .post(function (req, res) {
        var allergy = new Allergies(req.body);
        allergy.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })


router.route('/:patientID')
    .get(function (req, res) {
        Allergies.find({patientID: req.params.patientID}, function (err, response) {
            if(err)
                res.send(err);

            res.json(response);
        })
    });

module.exports = router;