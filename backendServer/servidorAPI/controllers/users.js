var Users = require('../models/users')
var bcrypt = require('bcryptjs')

module.exports.listar = () => {
    return Users.find().exec();
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    if(arr === undefined)
        return undefined
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

module.exports.addUser = user => {
    user.password = bcrypt.hashSync(user.password, 6);
    var novo = new Users(user);
    return novo.save();
}

module.exports.addLike = (id, postId) => {
    return Users.findOne({id: id}).then(user => {
        user.likes.push(postId)
        user.save()
    })
}

module.exports.changeAvatar = (id, path) => {
    return Users.update({ id: id }, { avatar: path }).exec()
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

module.exports.acceptRequest = async (id, friendid) => {
   const usr1 = await Users.findOne({ id: id });
    Users.findOne({ id: friendid }).then(usr2 => {
        if (usr1.friends.includes(friendid) || usr2.friends.includes(friendid)) {
            return false;
        }
        else if(!usr2.sentFriendRequests.includes(id) || !usr1.friendsRequests.includes(friendid)){
                return false;
        }
        else{
            usr2.friends.push(id)
            usr1.friends.push(friendid)
            removeA(usr1.friendsRequests,friendid)
            removeA(usr2.sentFriendRequests,id)
            console.log("user2: " + usr2.sentFriendRequests)
            if(usr1.sentFriendRequests.includes(friendid) !== undefined){
                removeA(usr1.sentFriendRequests,friendid)
            }
            if(usr2.friendsRequests.includes(id)){
                removeA(usr2.friendRequests,id)
            }
            usr2.save();
            usr1.save();
            return true;
        }
    });
    
}

module.exports.sendRequest = async (id, friendid) => {
    const usr1 = await Users.findOne({ id: id });
     Users.findOne({ id: friendid }).then(usr2 => {
         if (usr1.sentFriendRequests.includes(friendid) || usr1.friends.includes(friendid) || usr2.friendsRequests.includes(id)) {
             return false;
         }
         else{
             usr2.friendsRequests.push(id)
             usr1.sentFriendRequests.push(friendid)
             usr2.save();
             usr1.save();
             console.log("Registei: "+usr1 + " - " +usr2)
             return true;
         }
     });
     
 }