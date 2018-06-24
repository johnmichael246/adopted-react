const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const usersCtrl = require('../../controllers/users')

/*---------- Public Routes ----------*/
router.get('/', usersCtrl.getUser)



/*---------- Protected Routes ----------*/


module.exports = router