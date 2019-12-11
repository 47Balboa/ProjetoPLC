var Users = require('../models/users')

module.exports.listar=()=>{
    return Users.find().exec();
}

module.exports.addUser=user=>{
    return Users.create(user)
}

module.exports.getUser = email => {
    return Users.find({email: email}).exec()
}