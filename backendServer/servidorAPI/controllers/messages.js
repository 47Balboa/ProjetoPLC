const Messages = require('../models/messages')

module.exports.addMessage = (message) => {
    
    var men = new Messages(message);
    return men.save();
}

module.exports.getMessages = id =>{
    return Messages.find({id:id}).exec();
}