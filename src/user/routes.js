const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../config/multer')
const User = require('./user')
const verifyToken = require('../middlewares/verifyToken')

router.get('/', verifyToken , User.show)
router.post('/', multer(multerConfig).single('file') , User.store)

module.exports = app => app.use('/user',router)
