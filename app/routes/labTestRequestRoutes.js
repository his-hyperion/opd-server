var express = require('express');
var router = express.Router();

// Models
var labTestRequest = require('../models/labTestRequest');

router.route('/')
    .get(function (req, res) {
        labTestRequest.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });        
    })
    .post(function (req, res) {
        var labtestrequest = new labTestRequest(req.body);
        labtestrequest.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })

module.exports = router;