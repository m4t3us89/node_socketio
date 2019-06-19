const moongose = require('../config/database')
const bcrypt = require('bcrypt')

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
        unique: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
},{
    timestamps: true
})


User.pre('save' ,  async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password =  await bcrypt.hash(this.password, salt)
    return next()
})

module.exports = moongose.model('User', User)