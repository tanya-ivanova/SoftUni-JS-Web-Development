const {Schema, model, Types} = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const courseSchema = new Schema({
    title: {type: String, required: true, unique: true, minLength: 4},
    description: {type: String, required: true, minLength: 20},
    imageUrl: {type: String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    duration: {type: String, required: true},
    createdAt: {type: Date, required: true},
    usersEnrolled: {type: [Types.ObjectId], ref: 'User', default: []},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
});

courseSchema.index({title: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Course = model('Course', courseSchema);

module.exports = Course;