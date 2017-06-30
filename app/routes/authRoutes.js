var express = require('express');
var router = express.Router();

// Models
var User = require('../models/user');

router.route('/')
    .post(function (req, res) {
        var credentials = new User(req.body);

        User.findOne({ 'username': credentials.username }, function (err, user) {
            if (err) {
                res.send(err);
            }
            if (credentials.password == user.password) {
                res.json(user);
            } else {
                res.send(401);
            }
        });
    })

module.exports = router;