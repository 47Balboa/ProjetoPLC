var Users = require('../models/users')
var bcrypt = require('bcryptjs')

module.exports.listar = () => {
    return Users.find().exec();
}

module.exports.addUser = user => {
    user.password = bcrypt.hashSync(user.password, 6);
    var novo = new Users(user);
    return novo.save();
}

module.exports.getUser = email => {
    return Users.findOne({ email: email }).exec();
}

module.exports.deleteUser = email => {
    return Users.deleteOne({ email: email }).exec();
}

module.exports.sendRequest = (id, friendid) => {
    Users.findOne({ id: id }, function (err, usr) {
        if (usr.friendsRequests.find(friendid) == undefined && !err) {
            usr.friendsRequests.push(friendid);
            usr.save();
            return true;
        }
        else {
            return false;
        }
    })
}