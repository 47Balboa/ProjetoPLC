const mongoose = require('mongoose')

var postsSchema = new mongoose.Schema({
    autor: {type: String, required: true},
    text: String,
    ficheiros: [String],
    classificadores: {type: [String],required:true},
    data: String,
    grupo: String,
    comments: [String],
    contentType: String,
    descricao: String,
    dataEvento: String,
    localEvento: String
})

module.exports = mongoose.model('posts', postsSchema)