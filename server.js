var express = require('express');
var path = require('path');
var methodOverride=require('method-override');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');

require('dotenv').config();
require('./config/database');
var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(session({
//     seret:'SaveALife!',
//     resave:false,
//     saveUnitialized:true
// }))
// app.use(passport.initialize());
// app.use(passport.session());

//catch all route for routes
app.get('/*', (req,res)=> {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var port = process.env.PORT || 3001

app.listen(port, ()=> {
    console.log(`Express app running on port ${port}`)
})