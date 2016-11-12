// server.js
'use strict';

/******************** dependencies ********************/
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

/******************** configuration ********************/

// config files
var db = require('./config/db');

// set env port
var port = process.env.PORT || 8087;

// connect to mongoDB database
// enter credentials in config/db
mongoose.connect(db.url);

// get POST parameters
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true  }));

// set static files location
// /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

/******************** routes ********************/
require('./app/routes')(app);

/******************** start app ********************/
app.listen(port);
console.log('Launched app on port %s', port);
