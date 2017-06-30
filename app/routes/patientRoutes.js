var express = require('express');
var router = express.Router();

// Models
var Patient = require('../models/newPatient');

router.route('/')
    .get(function (req, res) {
        Patient.find(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.json(response);
            }
        });
    })
    .post(function (req, res) {
        var patient = new Patient(req.body);
        patient.save(function (err, response) {
            if (err) {
                res.send(err);
            }
            res.json(response);
        });
    })

router.route('/:patient_id')
    .put(function (req, res) {
        Patient.findById(req.params.patient_id, function (err, response) {
            if (err)
                res.send(err);

            response.title = req.body.title;
            response.firstName = req.body.firstName;
            response.lastName = req.body.lastName;
            response.dob = req.body.dob;
            response.gender = req.body.gender;
            response.civilStatus = req.body.civilStatus;
            response.nic = req.body.nic;
            response.passport = req.body.passport;
            response.citizenship = req.body.citizenship;
            response.language = req.body.language;
            response.bloodGroup = req.body.bloodGroup;
            response.address = req.body.address;
            response.phone = req.body.phone;
            response.mobile = req.body.mobile;
            response.remark = req.body.remark;
            
            response.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: "Successfully updated... " })
            })
        })
    })


module.exports = router;