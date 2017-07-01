var express = require('express');
var router = express.Router();

// Models
var Dosage = require('../models/dosage');

router.route('/')
    .get(function (req, res) {
        Dosage.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });        
    })
    .post(function (req, res) {
        var dosage = new Dosage(req.body);
        dosage.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })
    
    




module.exports = router;