const router = require('express').Router()
const User = require('./user')

router.get('/', User.show)

module.exports = app => app.use('/user',router)
