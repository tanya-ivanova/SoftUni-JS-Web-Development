const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String, 
        required: true,
        match: [/[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+/, 'Name should contain first and last name']                         
    },
    username: {
        type: String, 
        required: true, 
        unique: true,
        minLength: [5, 'Username should be at least 5 characters long']
    },    
    hashedPassword: {type: String, required: true}
});

userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});


const User = model('User', userSchema);

module.exports = User;