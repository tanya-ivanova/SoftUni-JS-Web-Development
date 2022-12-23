const {Schema, model} = require('mongoose');


const userSchema = new Schema({    
    username: {
        type: String, 
        required: true, 
        unique: true,
        match: [/^[a-zA-Z0-9]+$/i, 'Username may contain only english letters and numbers'],
        minLength: [4, 'Username should be at least 4 characters long']
    },    
    hashedPassword: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true,
        maxLength: [20, 'Address should be a maximum of 20 characters long']
    }
});

userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);


module.exports = User;