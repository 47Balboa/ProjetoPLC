const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    // id e o numero de aluno e é obrigatorio dado que eu uma rede social de estudantes
    id: {type:String, required:true},
    nome: {type:String, required: true},
    apelido: String,
    password: {type:String, required: true},
    email: {type:String, required: true},
    avatar:  String,
    dataNasc: String,
    curso: String,
    morada: String,
    posts: [String],
    friends: [String],
    friendsRequests: [String],
    comments: [String]
})

module.exports = mongoose.model('users', userSchema)