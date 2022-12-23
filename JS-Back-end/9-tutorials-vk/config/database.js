const mongoose = require('mongoose');

//TO DO: change database according to task
const CONNECTION_STRING = 'mongodb://localhost:27017/tutorials-vk'

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};