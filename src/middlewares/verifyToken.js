const jwt = require('jsonwebtoken')

module.exports = async (req,res,next) => {
    try{
        const {token} = req.headers
        if(token){
            
            if(!await jwt.verify(token,'shhhhh'))
                return res.status(401).json({message:'Token não válido.'})

        }else return res.status(401).json({message:'Token não informado.'})
        
        return next()
    }catch(err){
        return res.status(401).json({message:'Token não válido.'})
    }
}