/**
 * Import dependencies
 */
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').config();

/**
 * config libraries
 */
var database = require('./src/libs/database');

/**
 * [initialize express framework]
 * @type {object}
 */
var app = express();

/**
 * Configure express dependencies
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 *import routes
 */
var router = require('./src/routes');
app.use('/', router);


app.listen(process.env.PORT || 3000, function() {
	console.log('app running on port: ' + process.env.PORT);
	database.connect();
});

module.exports = app;
