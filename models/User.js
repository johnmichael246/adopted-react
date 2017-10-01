var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true, required:true, lowercase:true},
    password:String,
    favPets:[{type:ObjectId, ref:'Pet'}],
    friends:[{type:ObjectId, ref:'Friend'}],
}, {
    timestamps:true
})

module.exports = mongoose.model('User',userSchema)