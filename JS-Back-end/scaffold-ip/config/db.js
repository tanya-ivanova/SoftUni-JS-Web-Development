const mongoose = require('mongoose');
const { DB_CONNECTION_STRING } = require('./env');

exports.dbInit = () => {
    mongoose.connection.on('open', () => console.log('DB is connected!'));
    return mongoose.connect(DB_CONNECTION_STRING);
}