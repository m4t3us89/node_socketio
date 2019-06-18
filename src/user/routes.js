const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../config/multer')
const User = require('./user')

router.get('/', User.show)
router.post('/', multer(multerConfig).single('file') , User.store)

module.exports = app => app.use('/user',router)
