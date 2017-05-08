// BASE SETUP
// ================================================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/his_opd');

var Questionnaire = require('./app/models/questionnaire.js');

// API ROUTES
// ================================================================================
var router = express.Router();

// middleware
router.use(function (req, res, next) {
    console.log('Request received ==================================================');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'Welcome to API' });
});

router.route('/questionnaires')
    .post(function (req, res) {
        var questionnaire = new Questionnaire();
        questionnaire.name = req.body.name;

        questionnaire.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'Questionnaire created!' });
            }
        })
    })
    .get(function(req, res) {
        Questionnaire.find(function(err, questionnaires) {
            if (err) {
                res.send(err);
            } else {
                res.json(questionnaires);
            }
        });
    })

router.route('/questionnaires/:q_id')
    .get(function (req, res) {
        Questionnaire.findById(req.params.q_id, function (err, questionnaire) {
            if (err) {
                res.send(err);
            } else {
                res.json(questionnaire);
            }
        });
    });

// REGISTER ROUTES ----------
app.use('/api', router);


// START SERVER
// ================================================================================
app.listen(port);
console.log('opd-server listening on port ' + port + '...');