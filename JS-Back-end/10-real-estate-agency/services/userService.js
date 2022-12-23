const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {JWT_SECRET} = require('../config/env');
const {SALT_ROUNDS} = require('../constants');


async function register(name, username, password) {
    const existingUsername = await User.findOne({username}).collation({locale: 'en', strength: 2});
    if(existingUsername) {
        throw new Error('Username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
        name,
        username,
        hashedPassword
    });

    const token = createSession(user);
    return token;
}

async function login(username, password) {
    const user = await User.findOne({username}).collation({locale: 'en', strength: 2});

    if(!user) {
        throw new Error('Incorrect username or password');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if(hasMatch == false) {
        throw new Error('Incorrect username or password');
    }

    const token = createSession(user);
    return token;
}

function createSession({_id, name, username}) {
    const payload = {
        _id,
        name,
        username
    };

    const options = {expiresIn: '5d'};

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, JWT_SECRET, options, (err, encodedToken) => {
            if(err) {
                return reject(err);
            }

            resolve(encodedToken);
        });
    });

    return tokenPromise;    
}


module.exports = {
    register,
    login
}