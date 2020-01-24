const mongoose = require('mongoose')

var postsSchema = new mongoose.Schema({
    id: {type: String, required: true},
    author: {type: String, required: true},
    text: String,
    ficheiros: [],
    classificadores: {type: [String],required:true},
    date: String,
    grupo: String,
    comments: [String],
    contentType: String,
    descricao: String,
    dataEvento: String,
    localEvento: String,
    likes: [String],
    title: String,
})

module.exports = mongoose.model('posts', postsSchema)