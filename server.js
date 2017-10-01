var methodOverride=require('method-override');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');

require('dotenv');
require('config/database');
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.json());
app.use(require('./config/passport'));

//catch all route for routes
app.get('/*', (req,res)=> {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
var port = process.env.PORT || 3001

app.listen(port, ()=> {
    console.log(`Express app running on port ${port}`)
})