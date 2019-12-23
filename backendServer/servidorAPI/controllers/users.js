var Users = require('../models/users')

module.exports.listar=()=>{
    return Users.find().exec();
}

module.exports.addUser=user=>{
    var novo = new Users(user);
    return novo.save();
}

module.exports.getUser = email => {
    return Users.findOne({email: email}).exec()
}