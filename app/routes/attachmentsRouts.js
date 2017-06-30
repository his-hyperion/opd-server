var express = require('express');
var router = express.Router();

// Models
var Attachments = require('../models/attachments');

router.route('/')
    .post(function (req, res) {
        var attachment = new Attachments(req.body);
        attachment.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })


router.route('/:patientID')
    .get(function (req, res) {
        Attachments.find({patientID: req.params.patientID}, function (err, response) {
            if(err)
                res.send(err);

            res.json(response);
        })
    });

module.exports = router;