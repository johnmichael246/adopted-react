let mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.once('open', ()=> {
    console.log(`Mongo DB ${db.name}running at host${db.host}:port${db.port}`)
})

db.once('error',(err)=> {
    console.log(`DB error:\n ${err}`)
})