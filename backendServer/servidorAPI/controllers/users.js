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

module.exports.changeAvatar = (id, path) => {
    return Users.update({ id: id }, { avatar: path }, function (err
        , resp) {
        console.log(resp);
    })
}

module.exports.getUserId = id => {
    return Users.findOne({ id: id }).exec();
}

module.exports.getUser = email => {
    return Users.findOne({ email: email }).exec();
}

module.exports.deleteUser = email => {
    return Users.deleteOne({ email: email }).exec();
}

module.exports.acceptRequest = (id, friendid) => {
    return Users.findOne({ id: id }, function (err, usr) {
        for (i in usr.friends) {
            if (usr.friends[i] === friendid)
                return false;
        }
        for (i in usr.friendsRequests) {
            if (usr.friendsRequests[i] === friendid) {
                usr.friends.push(friendid);
                Users.findOne = ({ id: friendid }, function (err, usr2) {
                    for(i in usr2.friendsRequests)
                        if(usr.friendsRequests[i] == id)
                            usr2.friendsRequests.splice(i,1)
                    usr2.friends.push(id);
                    return true
                })
            }
        }
    })
}

module.exports.sendRequest = (id, friendid) => {
    return Users.findOne({ id: id }, function (err, usr) {
        for (i in usr.friendsRequests) {
            if (usr.friendsRequests[i] === friendid)
                return false;
        }
        for (i in usr.friends) {
            if (usr.friends[i] === friendid)
                return false;
        }
        usr.friendsRequests.push(friendid)
        usr.save();
        return true;
    })
}