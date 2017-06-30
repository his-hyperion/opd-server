var express = require('express');
var router = express.Router();

// Models
var Notes = require('../models/note');

router.route('/')
    .post(function (req, res) {
        var note = new Notes(req.body);
        note.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })


router.route('/:patientID')
    .get(function (req, res) {
        Notes.find({patientID: req.params.patientID}, function (err, response) {
            if(err)
                res.send(err);

            res.json(response);
        })
    });

module.exports = router;