const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        minLength: 5
    },    
    email: {
        type: String, 
        required: true, 
        unique: true,
        minLength: 10                
    },
    hashedPassword: {type: String, required: true}
});

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;