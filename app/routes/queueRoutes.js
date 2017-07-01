var express = require('express');
var router = express.Router();

// Models
var Queue = require('../models/queue');
var Doctor = require('../models/doctor');

router.route('/')
    .get(function (req, res) {
        Queue.
            find().
            populate('patients').
            populate('doctor').
            exec(function (err, queues) {
                if (err) {
                    res.send(err);
                    return;
                }
                res.json(queues);
            });

    })
    .post(function (req, res) {
        Queue.findOne({ doctor: req.body.doctor }, function (err, resQueue) {
            if (err) {
                res.send(err);
                return;
            }
            if (!resQueue || resQueue.length == 0) {
                var queue = new Queue(req.body);
                queue.save(function (err, response) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(response);
                });
            } else {
                resQueue.patients.push(req.body.patients);
                resQueue.save(function (err, response) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(response);
                });
            }
        });
    });

router.route('/doctors')
    .get(function (req, res) {
        Doctor.find(function (err, response) {
            res.json(response);
        });
    })

router.route('/patients')
    .get(function (req, res) {
        Queue.
            find().
            select('patients').
            exec(function (err, queues) {
                if (err) {
                    res.send(err);
                    return;
                }
                res.json(queues);
            });

    });

router.route('/:doctorid')
    .get(function (req, res) {
        var doc_id = req.params.doctorid;
        Queue.
            find({ doctor: doc_id }).
            populate('patients').
            select('patients').
            exec(function (err, queues) {
                if (err) {
                    res.send(err);
                    return;
                }
                res.json(queues);
            });

    });

module.exports = router;