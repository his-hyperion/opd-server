var express = require('express');
var router = express.Router();

// Models
var Drug = require('../models/drug');

router.route('/')
    .get(function (req, res) {
        Drug.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });        
    })
    .post(function (req, res) {
        var drug = new Drug(req.body);
        drug.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })
    
    




module.exports = router;