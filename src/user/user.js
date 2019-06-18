

class User{

    show(req,res){
        return res.status(201).send('Hello Word')
    }

}

module.exports = new User()