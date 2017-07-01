var express = require('express');
var router = express.Router();

// Models
var Frequency = require('../models/frequency');

router.route('/')
    .get(function (req, res) {
        Frequency.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });        
    })
    .post(function (req, res) {
        var frequency = new Frequency(req.body);
        frequency.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })
    
    




module.exports = router;