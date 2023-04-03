const {Schema, model, Types} = require('mongoose');


const adSchema = new Schema({
    headline: {type: String, required: true, minLength: [4, 'Headline must be at least 4 characters long']},
    location: {type: String, required: true, minLength: [8, 'Location must be at least 8 characters long']},
    name: {type: String, required: true, minLength: [3, 'Name must be at least 3 characters long']},
    companyDescription: {type: String, required: true, maxLength: [40, 'The Company description should be a maximum of 40 characters long']},
    owner: {type: Types.ObjectId, ref: 'User', required: true},
    usersApplied: {type: [Types.ObjectId], ref: 'User', default: []},
});


const Ad = model('Ad', adSchema);

module.exports = Ad;