var Groups = require('../models/groups')
var Users = require('../models/users')
var uuid = require('uuid')

module.exports.getAllGroups = user => {
    return Groups.find({ $or: [{ isDiscipline: "false" }, { $and: [{ isDiscipline: "true" }, { nome: { $in: user.groups } }] }] }).exec()
}

module.exports.listar = () => {
    return Groups.find({ isDiscipline: "false" }).exec()
}

module.exports.createGroup = (user, group) => {
    return Groups.findOne({nome: group.nome}).then(data => {
        Users.findOne({id: user.id}).then(dados => {
            var lista = [user.id];
            var auxi = uuid()
            var groupCompleted = Object.assign({}, group, { admins: lista, id: auxi,isDiscipline: "false",avatar:"" })
            var groupToObject = new Groups(groupCompleted)
            dados.groups.push(group.nome)
            dados.save();
            return groupToObject.save()
           })

    })
   
   
}

module.exports.getRequests = user => {

    return Groups.find({$and: [{admins: [user.id]},{requests: {$not: {$size: 0}}}]}).exec()
}

module.exports.receiveRequests = (id, groupid) => {
    return Groups.findOne({ id: groupid }).then(dados => {
        if (dados.private === "true" && dados.isDiscipline === "false") {
            if (dados.requests.includes(id)) {
                return false;
            }
            else {
                console.log("cheguei")
                dados.requests.push(id);
               return dados.save();
                
            }
        }
    })
}



module.exports.acceptRequest = (userid, memberid, groupid) => {
    
    return Groups.findOne({ id: groupid }).then(dados => {
            Users.findOne({ id: memberid }).then(userdados => {
                if (dados.members.includes(memberid)) {
                    return false;
                }
                else {
                    dados.members.push(memberid);
                    var i = dados.requests.indexOf(memberid)
                    dados.requests.splice(i, 1);
                    userdados.groups.push(dados.id)
                    dados.save();
                    return true;
                }
            
        })
    })
}

module.exports.publicAcceptRequest = (userid,groupid) => {
    return Groups.findOne({ id: groupid }).then(dados => {
        Users.findOne({id: userid}).then(userdados => {
            if(!dados.members.includes(userid)){
                dados.members.push(userid)
                userdados.groups.push(dados.nome)
                userdados.save();
                dados.save();
            }
        })
        
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

