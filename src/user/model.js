const moongose = require('../config/database')
const crypto = require('crypto')

const User = new moongose.Schema({
    profile: {
        type:String,
        required: true,
    },
    first_name: {
       type: String,
       required: true,
    } ,
    last_name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

User.pre('save' , async function(next){
    this.password = await crypto.scrypt(this.password, 'salt' , '24')
    return next()
})

module.exports = moongose.model('User', User)