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

module.exports.getFriendRequests = lista => {

    return Users.find({ id: { $in: lista } }).exec()
}

module.exports.acceptRequest = (id, friendid) => {


    return Users.findOne({ id: id }, function (err, usr) {
        
        for (i in usr.friends) {
            if (usr.friends[i] === friendid)
                return false;
        }
        for (i in usr.friendsRequests) {

            if (usr.friendsRequests[i] === friendid) {
                
                usr.friendsRequests.splice(i, 1)
                usr.friends.push(friendid);
                for (i in usr.sentFriendRequests)
                    if (usr.sentFriendRequests[i] == id)
                        usr.sentFriendRequests.splice(i, 1)

                Users.findOne({ id: friendid }, function (err, usr2) {
                    for (i in usr2.friendsRequests)
                        if (usr2.friendsRequests[i] == id)
                            usr2.friendRequests.splice(i, 1)
                    for (i in usr2.sentFriendRequests)
                        if (usr2.sentFriendRequests[i] == id)
                            usr2.sentFriendRequests.splice(i, 1)
                    usr2.friends.push(id);
                    console.log("usr: " + usr2)
                    usr.save()
                    usr2.save()
                    return true
                })

            }
        }
    })
}

module.exports.sendRequest = (id, friendid) => {
    return Users.find({ id: { $in: [id, friendid] } }, function (err, usr) {
        var usr1 = usr[0]
        var usr2 = usr[1]
        for (i in usr2.friendsRequests) {
            if (usr2.friendsRequests[i] === id)
                return false;
        }
        for (i in usr1.friends) {
            if (usr1.friends[i] === id)
                return false;
        }
        for (i in usr2.friends) {
            if (usr2.friends[i] === id)
                return false;
        }
        console.log(usr2)
        usr1.friendsRequests.push(id)
        usr2.save();
        usr2.sentFriendRequests.push(friendid)
        usr1.save();
        return true;
    })
}