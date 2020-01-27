var Groups = require('../models/groups')

module.exports.publicGroups = () => {
    Groups.find({private: false}).exec()
}

module.exports.getGroup = id => {
    Groups.findOne({id: id}).exec()
}