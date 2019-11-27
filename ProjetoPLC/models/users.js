const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    id: String,
    nome: String,
    apelido: String,
    password: String,
    email: String
})

module.exports = mongoose.model('users', userSchema)