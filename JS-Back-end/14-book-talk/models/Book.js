const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const bookSchema = new Schema({
    title: {type: String, required: true, minLength: [2, 'Title must be at least 2 characters long']},
    author: {type: String, required: true, minLength: [5, 'Author must be at least 5 characters long']},
    imageUrl: {type: String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    review: {type: String, required: true, minLength: [10, 'Review must be at least 10 characters long']},
    genre: {type: String, required: true, minLength: [3, 'Title must be at least 3 characters long']},
    stars: {type: Number, required: true, min: 1, max: 5},
    wishingList: {type: [Types.ObjectId], ref: 'User', default: []},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
});

// bookSchema.index({name: 1}, {
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
// }); 

const Book = model('Book', bookSchema);

module.exports = Book;