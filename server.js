const express = require('express');
const path = require('path');
const methodOverride=require('method-override');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
let favicon = require('serve-favicon')

require('dotenv').config();
require('./config/database');
const app = express();

app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'public', 'PETLOGO.ico')))
app.use(express.static(path.join(__dirname,'build')))

app.use(bodyParser.json());


app.use('/api/users', require('./routes/api/users'))
app.use('/api/petfinder', require('./routes/api/petfinder'))
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