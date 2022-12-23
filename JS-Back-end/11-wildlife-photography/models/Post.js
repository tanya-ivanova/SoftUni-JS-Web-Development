const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const postSchema = new Schema({
    title: {type: String, required: true, unique: true, minLength: [6, 'Title must be at least 6 characters long']},
    keyword: {type: String, required: true, minLength: [6, 'Keyword must be at least 6 characters long']},
    location: {type: String, required: true, maxLength: [15, 'Location should be a maximum of 15 characters long']},
    creationDate: {
        type: String, 
        required: true,
        match: [/^\d{2}.\d{2}.\d{4}$/]
    },
    imageUrl: {type: String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    description: {type: String, required: true, minLength: [8, 'The Description should be a minimum of 8 characters long']},
    author: {type: Types.ObjectId, ref: 'User', required: true},
    votes: {type: [Types.ObjectId], ref: 'User', default: []},
    rating: {type: Number, required: true, default: 0},
});

postSchema.index({name: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Post = model('Post', postSchema);

module.exports = Post;