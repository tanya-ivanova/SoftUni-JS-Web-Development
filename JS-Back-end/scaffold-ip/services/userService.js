const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);
//exports.addPublication = (userId, publicationId) => User.updateOne({_id: userId}, {$push: {publications: publicationId}});
exports.addPublication = async (userId, publicationId) => {
    const user = await User.findById(userId);
    user.publications.push(publicationId);
    await user.save();

    return user;
}