var Groups = require('../models/groups')
var Users = require('../controllers/users')
var uuid = require('uuid')

module.exports.getAllGroups = user => {
    return Groups.find({ $or: [{ isDiscipline: "false" }, { $and: [{ isDiscipline: "true" }, { nome: { $in: user.groups } }] }] }).exec()
}

module.exports.listar = () => {
    return Groups.find({ isDiscipline: "false" }).exec()
}

module.exports.createGroup = (user, group) => {
    var lista = [user.id];
    var groupCompleted = Object.assign({}, group, { admins: lista, id: uuid(),isDiscipline: "false",avatar:"" })
    var groupToObject = new Groups(groupCompleted)
    return groupToObject.save()
   
}

module.exports.getRequests = user => {

    return Groups.find({$and: [{admins: [user.id]},{requests: {$not: {$size: 0}}}]}).exec()
}

module.exports.receiveRequests = (id, groupid) => {
    console.log("cheguei")
    return Groups.findOne({ id: groupid }).then(dados => {
        if (dados.private === "true" && dados.isDiscipline === "false") {
            if (dados.requests.includes(id)) {
                return false;
            }
            else {
                console.log("cheguei")
                dados.requests.push(id);
                dados.save();
                return true;
            }
        }
    })
}



module.exports.acceptRequest = (userid, memberid, groupid) => {
    return Groups.findOne({ id: groupid }).then(dados => {
        Users.findOne({ id: userid }).then(userdados => {
            if (groupo.admin === userid) {
                if (dados.members.includes(memberid)) {
                    return false;
                }
                else {
                    dados.members.push(memberid);
                    var i = dados.requests.indexOf(memberid)
                    dados.requests.splice(i, 1);
                    user.dados.groups.push(dados.id)
                    dados.save();
                    return true;
                }
            }
        })
    })
}

module.exports.publicAcceptRequest = (userid,groupid) => {
    return Groups.findOne({ id: groupid }).then(dados => {
        if(!dados.members.includes(userid)){
            dados.members.push(userid)
            dados.save();
        }
    })

}

module.exports.removeMember = (userid, memberid, groupid) => {
    return Groups.findOne({ id: groupid }).then(grupo => {
        if (groupo.admin === userid) {
            var i = grupo.members.indexOf(memberid)
            dados.members.splice(i, 1);
        }
    })
}


module.exports.getGroup = id => {
   return Groups.findOne({ id: id }).exec()
}

