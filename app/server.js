// BASE SETUP
// ================================================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/his_opd');

var router = express.Router();

// API ROUTES
// ================================================================================
var patientRoutes = require('./routes/patientRoutes');
var questionnaireRoutes = require('./routes/questionnaireRoutes');
var visitRoutes = require('./routes/visitsRoutes');
var allergyRoutes = require('./routes/allergiesRoutes');
var notesRoutes = require('./routes/notesRoutes');
var attachmentsRoutes = require('./routes/attachmentsRouts');
var userRoutes = require('./routes/userRoutes');
var authRoutes = require('./routes/authRoutes');


// middleware
router.use(function (req, res, next) {
    console.log('Request received ==================================================');
    next();
});

// REGISTER ROUTES ----------
// app.use('/api', router);
app.use('/patients', patientRoutes);
app.use('/questionnaires', questionnaireRoutes);
app.use('/visits', visitRoutes);
app.use('/allergies', allergyRoutes);
app.use('/notes', notesRoutes);
app.use('/attachments', attachmentsRoutes);
app.use('/users', userRoutes);
app.use('/authenticate', authRoutes);


// START SERVER
// ================================================================================
app.listen(port);
console.log('opd-server listening on port ' + port + '...');