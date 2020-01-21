const Messages = require('../models/messages')

module.exports.addMessage = (message) => {
    
    var men = new Messages(message);
    return men.save();
}

module.exports.getMessages = (id,friendid) =>{
   return Messages.find({$or: [{id: id}, {participantId: id}]}).sort({timestamp: 1}).exec();
}
