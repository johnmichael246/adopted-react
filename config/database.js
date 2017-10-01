var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once('open', ()=> {
    console.log(`Mongo DB ${mongoose.connection.name}running at host${mongoose.connection.host}:port${mongoose.connection.port}`)
})

mongoose.connection.once('error',(err)=> {
    console.log(`DB error:\n ${err}`)
})