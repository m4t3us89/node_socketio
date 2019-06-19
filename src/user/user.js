const UserModel = require('./model')
const fs = require('fs')
const path = require('path')

class User{

    async show(req,res){
        try{
            const user = await UserModel.find()
            return res.status(201).json(user)
        }catch(err){
            return res.status(400).json(err)
        }
    }

    async store(req,res){
        try{
            req.body.profile = req.file.key
            const user = await UserModel.create(req.body)
            user.password = undefined
            return res.status(201).json(user)
        }catch(err){
            fs.unlinkSync(
                `${path.resolve(__dirname,'..','..','tmp')}/${req.file.key}`
            )
            return res.status(400).json(err)
        }
    }

}

module.exports = new User()