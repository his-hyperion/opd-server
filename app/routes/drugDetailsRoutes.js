var express = require('express');
var router = express.Router();

// Models
var DrugDetails = require('../models/drugDetails');

router.route('/')
    .get(function (req, res) {
        DrugDetails.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });        
    })
    .post(function (req, res) {
        var drugdetails = new DrugDetails(req.body);
        drugdetails.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })
    
    




module.exports = router;