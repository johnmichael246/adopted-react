var mongoose = require('mongoose');
var Promise = global.Promise;

mongoose.connect =(process.env.DTABASE_URL);

mongoose.connection.once('open', ()=> {
    console.log(`Mongo DB ${mongoose.connection.name}running at host${host}:port${port}`)
})

mongoose.connection.once('error',(err)=> {
    console.log(`DB error:\n ${err}`)
})