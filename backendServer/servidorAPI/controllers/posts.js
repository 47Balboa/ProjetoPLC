var Posts = require('../models/posts')

module.exports.listar=()=>{
    return Posts.find().exec();
}

module.exports.createPost=(post,id)=>{
    newPost = Object.assign({},post,{author: id})
    console.log(newPost)
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

