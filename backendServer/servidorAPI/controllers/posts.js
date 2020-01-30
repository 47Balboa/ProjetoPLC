var Posts = require('../models/posts')
var Users = require('../models/users')

module.exports.listar=user=>{
    var friendGroups = user.groups
    
    var index = user.groups.indexOf('Individual')
    var groups = user.groups.splice(index,1)
    
    return Posts.find({$or: [{grupo: {$in: user.groups}},{author: user.id},{$and: [{author: {$in: user.friends},grupo: "Individual" }]}]}).sort({date: -1}).exec()
}

module.exports.addLike=(postid, userid)=>{
    return Posts.findOne({id: postid}).then(post => {
        Users.findOne({id: userid}).then(userdados =>{
            userdados.likes.push(postid)
            userdados.save()
        })
        post.likes.push(userid)
        return post.save()
        
    })
}

module.exports.unlike=(postid, userid)=>{
    return Posts.findOne({id: postid}).then(post => {
        Users.findOne({id: userid}).then(userdados =>{
            userdados.likes.splice(userdados.likes.indexOf(postid), 1)
            userdados.save()
        })
        post.likes.splice(post.likes.indexOf(userid), 1)
       return post.save()
    })
}

module.exports.getUserPosts=(groups,userid)=>{
    return Posts.find({$and: [{author: userid,grupo: {$in: groups}}]}).sort({date: -1})
}

module.exports.getGroupPosts=(groupname)=>{
    return Posts.find({grupo: groupname}).exec()
}

module.exports.createPost=(post,id)=>{
    newPost = Object.assign({},post,{author: id})
    var novo = new Posts(newPost);
    return novo.save();
}

module.exports.addFile = (id, file) => {
    
}

module.exports.getPost = id => {
    return Posts.findOne({id: id}).exec()
}

module.exports.deletePost = id =>{
    return Posts.remove({id: id}).exec();
}

