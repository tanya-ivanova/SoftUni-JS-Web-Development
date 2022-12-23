const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const publicationSchema = new Schema({
    title: {type: String, required: true, unique: true, minLength: [6, 'Title name must be at least 6 characters long']},
    paintingTechnique: {type: String, required: true, maxLength: [15, 'Address should be a maximum of 15 characters long']},
    artPicture: {type: String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Picture URL is not valid'
    }},  
    certificate: {type: String, enum: ['Yes', 'No']},
    owner: {type: Types.ObjectId, ref: 'User', required: true},
    sharings: {type: [Types.ObjectId], ref: 'User', default: []}    
});

publicationSchema.index({title: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Publication = model('Publication', publicationSchema);

module.exports = Publication;