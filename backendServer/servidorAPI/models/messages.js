const mongoose = require('mongoose')

var messages = new mongoose.Schema({
    id: {type: String, required: true},
    participantId: {type: String, required: true},
    timestamp: String,
    myself: {type: String, required:true},
    content: String,
    uploaded: String,
    viewed: String,
})

module.exports = mongoose.model('messages',messages)