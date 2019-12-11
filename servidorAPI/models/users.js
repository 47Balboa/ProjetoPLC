const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    nome: {type:String, required: true},
    apelido: String,
    password: {type:String, required: true},
    email: {type:String, required: true},
    avatar:  String,
    dataNasc: String,
    curso: String,
    morada: String,
    friends: [String],
    comments: [String],
    posts: [String],
})

module.exports = mongoose.model('users', userSchema)