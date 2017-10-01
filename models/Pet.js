var mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name:String,
    age:String
}, {
    timestamps:true
})

module.exports = mongoose.model('Pet',petSchema)