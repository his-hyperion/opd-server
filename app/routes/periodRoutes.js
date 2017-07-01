var express = require('express');
var router = express.Router();

// Models
var Period = require('../models/period');

router.route('/')
    .get(function (req, res) {
        Period.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });
    })
    .post(function (req, res) {
        var period = new Period(req.body);
        period.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })




module.exports = router;