const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        // Use the connection string for your local MongoDB instance.
        await mongoose.connect('mongodb://localhost:27017/test'); // Removed deprecated options
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
};

module.exports = connectDb;
