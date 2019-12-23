var Posts = require('../models/posts')

module.exports.listar=()=>{
    return Posts.find().exec();
}

module.exports.createPost=post=>{
    var novo = new Posts(post);
    return novo.save();
}

module.exports.getPost = id => {
    return Posts.findOne({_id: id}).exec()
}

module.exports.deletePost = id =>{
    return Posts.remove({id: id}).exec();
}

