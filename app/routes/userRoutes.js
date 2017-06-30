var express = require('express');
var router = express.Router();

// Models
var User = require('../models/user');

router.route('/')
    .get(function (req, res) {
        User.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });
    })
    .post(function (req, res) {
        var user = new User(req.body);
        user.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })

module.exports = router;