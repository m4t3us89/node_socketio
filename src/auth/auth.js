const jwt = require('jsonwebtoken')
const User = require('../user/model')
const bcrypt = require('bcrypt')

class Auth{
    async auth(req,res){
        try{
            const {username,password} = req.body
            const user = await User.findOne({
                username
            })
           
            if(user){
               
                if(await bcrypt.compare( password, user.password )){

                    const token = jwt.sign({id:user._id}, 'shhhhh')
                    user.password = undefined
                    return res.status(201).json({user,token})

                }else return res.status(400).json({message:'Password incorreto.'})
                
            }else return res.status(400).json({message:'Usuário não identificado.'})

           
        }catch(err){
            return res.status(400).json(err)
        }
    }
}


module.exports = new Auth()