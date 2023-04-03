const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const auctionSchema = new Schema({
    title: {type: String, required: true, minLength: [4, 'Title must be at least 4 characters long']},
    description: {type: String, maxLength: [200, 'The description should be a maximum of 200 characters long']},
    category: {type: String, required: true, enum: ['vehicles', 'estate', 'electronics', 'furniture', 'other']},
    imageUrl: {type: String, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    price: {type: Number, required: true, min: 0}, 
    bidder: {type: Types.ObjectId, ref: 'User'},
    owner: {type: Types.ObjectId, ref: 'User', required: true},
    closed: {type: Boolean, default: false}
});

// auctionSchema.index({title: 1}, {
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
// });

const Auction = model('Auction', auctionSchema);

module.exports = Auction;