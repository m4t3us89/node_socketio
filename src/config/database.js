require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASEURLLOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

module.exports = mongoose