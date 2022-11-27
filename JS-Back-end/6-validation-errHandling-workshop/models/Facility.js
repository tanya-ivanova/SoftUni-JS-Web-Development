const {Schema, model, Types} = require('mongoose');

const facilitySchema = new Schema({
    label: {type: String, required: true},
    iconUrl: {type: String, minLength: [1, 'Icon Url must be at least 1 character long']},
    rooms: {type: [Types.ObjectId], default: [], ref: 'Room'}
});

const Facility = model('Facility', facilitySchema);

module.exports = Facility;