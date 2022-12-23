const {Schema, model, Types} = require('mongoose');


const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true,
        minLength: [3, 'First name must be at least 3 characters long'],
        match: [/^[a-zA-Z]+$/i, 'First name may contain only english letters']                        
    },
    lastName: {
        type: String, 
        required: true,
        minLength: [5, 'Last name must be at least 5 characters long'],
        match: [/^[a-zA-Z]+$/i, 'Last name may contain only english letters']                        
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
        match: [/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/i]                
    },        
    hashedPassword: {type: String, required: true},
    myPosts: {type: [Types.ObjectId], ref: 'Post', default: []}
});

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;