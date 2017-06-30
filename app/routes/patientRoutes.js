var express = require('express');
var router = express.Router();

// Models
var Patient = require('../models/newPatient');

router.route('/')
    .get(function (req, res) {
        
        res.send(200);
    })

module.exports = router;