const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const houseSchema = new Schema({
    name: {type: String, required: true, unique: true, minLength: [6, 'Name must be at least 6 characters long']},
    type: {type: String, required: true, enum: ['Apartment', 'Villa', 'House']},
    year: {type: Number, required: true, min: [1850, 'Year should be between 1850 and 2021'], max: [2021, 'Year should be between 1850 and 2021']},
    city: {type: String, required: true, minLength: [4, 'City must be at least 4 characters long']},
    imageUrl: {type: String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    description: {type: String, required: true, maxLength: [60, 'Description should be a maximum of 60 characters long']},    
    availablePieces: {type: Number, required: true, min: [0, 'Available Pieces should be positive number (from 0 to 10)'], max: [10, 'Available Pieces should be positive number (from 0 to 10)']},
    usersRented: {type: [Types.ObjectId], ref: 'User', default: []},
    owner: {type: Types.ObjectId, ref: 'User'}
}, {timestamps: true});

houseSchema.index({name: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const House = model('House', houseSchema);

module.exports = House;