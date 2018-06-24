const User = require('../models/user')
const request = require('request')
const basePath = "http://api.petfinder.com"


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
}

async function getUser(req,res) {
    try {
        let user = await User.findById(req.user._id)
        console.log(user)
        res.json(user)
    } catch(e) {
        throw new Error(e)
    }
}

function findPets(req, res) {
    const { size, age, species, zip } = req.body
    const url = `${basePath}/pet.find?key=${process.env.PETFINDER_KEY}&format=json&animal=${species}&size=${size}&age=${age}&location=${zip}`
    try {
        request(url, (err, response, body) => {
            let petfinderResponse = JSON.parse(body)
            console.log('res==',petfinderResponse.petfinder.pets)
            res.json(petfinderResponse.petfinder)
        })
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    // populateUser,
    checkAuth,
    getUser,
    findPets
}