var methodOverride=require('method-override');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');

require('dotenv');
require('config/database');
var app = require('express');

app.use(bodyParser.json());
app.use(logger('dev'));


