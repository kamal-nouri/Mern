const User = require('../models/user.model');
 
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allDaUsers => res.json( allDaUsers ))
        .catch(err => res.json({ message: 'cant find a shitt', error: err }));
}
 
module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: 'cant find a one shitt', error: err }));
}
 
module.exports.createNewUser = (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
        .catch(err => res.json({ message: 'creating shitt', error: err }));
}
 
module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'updating the shitt', error: err }));
}
 
module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'delete shitt', error: err }));
}