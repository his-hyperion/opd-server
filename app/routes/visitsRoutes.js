var express = require('express');
var router = express.Router();

// Models
var Visits = require('../models/visits');

router.route('/')
    .post(function (req, res) {
        var visit = new Visits(req.body);
        visit.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })


router.route('/:patientID')
    .get(function (req, res) {
        Visits.find({patientID: req.params.patientID}, function (err, response) {
            if(err)
                res.send(err);

            res.json(response);
        })
    });

module.exports = router;