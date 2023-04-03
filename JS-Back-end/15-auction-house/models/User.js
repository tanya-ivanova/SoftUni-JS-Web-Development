const {Schema, model, Types} = require('mongoose');

const EMAIL_PATTERN = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;

const userSchema = new Schema({        
    email: {
        type: String, 
        required: true, 
        unique: true,
        minLength: 10,
        validate: {
            validator: (value) => EMAIL_PATTERN.test(value),
            message: 'Email is not valid'
        }                
    },
    hashedPassword: {type: String, required: true},
    firstName: {
        type: String, 
        required: true,         
        minLength: 1                
    },
    lastName: {
        type: String, 
        required: true,         
        minLength: 1                
    },
    closedAuctions: {type: [Types.ObjectId], ref: 'Auction', default: []}
});

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;