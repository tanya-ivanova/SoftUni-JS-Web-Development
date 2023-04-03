const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const photoSchema = new Schema({
    name: {type: String, required: true, minLength: [2, 'Name must be at least 2 characters long']},
    imageUrl: {type: String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    age: {type: Number, required: true, min: 1, max: 100},
    description: {
        type: String, 
        required: true, 
        minLength: [5, 'Description must be at least 5 characters long'],
        maxLength: [50, 'Description must be no longer than 50 characters']
    },
    location: {
        type: String, 
        required: true, 
        minLength: [5, 'Location must be at least 5 characters long'],
        maxLength: [50, 'Location must be no longer than 50 characters']
    },
    commentList: {type: Array, default: []},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
});


const Photo = model('Photo', photoSchema);

module.exports = Photo;