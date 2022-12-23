const {Schema, model, Types} = require('mongoose');


const userSchema = new Schema({    
    username: {
        type: String, 
        required: true, 
        unique: true,
        match: [/^[a-zA-Z0-9]+$/i, 'Username may contain only english letters and numbers'],
        minLength: 5
    },    
    hashedPassword: {type: String, required: true},
    enrolledCourses: [{
        type: Types.ObjectId,
        ref: 'Course',
        default: []
    }]
});

userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});


const User = model('User', userSchema);

module.exports = User;