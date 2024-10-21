const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');

// Config dot env file
dotenv.config();

// Database connection
connectDb();

// Create an Express app
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transaction routes
app.use('/api/v1/transactions',require('./routes/transactionRoute'))

// Set the port
const PORT = process.env.PORT || 8080; // Fix here

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgGreen.white);
});
