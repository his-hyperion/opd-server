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
mongoose.connect('mongodb://52.15.99.209:27017/his_opd');

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
var drugsRoutes = require('./routes/drugsRoutes');
var periodRoutes = require('./routes/periodRoutes');
var frequencyRoutes = require('./routes/frequencyRoutes');
var dosageRoutes = require('./routes/dosageRoutes');
var drugDetailsRoutes = require('./routes/drugDetailsRoutes');
var patientExaminationRoutes = require('./routes/patientExaminationRoutes');
var labTestRequestRoutes = require('./routes/labTestRequestRoutes');

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
app.use('/drugs', drugsRoutes);
app.use('/period', periodRoutes);
app.use('/frequency', frequencyRoutes);
app.use('/dosages', dosageRoutes);
app.use('/drugDetails', drugDetailsRoutes);
app.use('/newExaminations', patientExaminationRoutes);
app.use('/labTestRequest', labTestRequestRoutes);

// START SERVER
// ================================================================================
app.listen(port);
console.log('opd-server listening on port ' + port + '...');