var Posts = require('../models/posts')

module.exports.listar=user=>{
    var index = user.groups.indexOf('Individual')
    var groups = user.groups.splice(index,1)
    return Posts.find({$or: [{grupo: {$in: groups}},{author: user.id}]}).sort({date: 1}).exec()
}

module.exports.addLike=(postid, userid)=>{
    return Posts.findOne({id: postid}).then(post => {
        post.likes.push(userid)
        post.save()
    })
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

