const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config({path:'./.env'});

const app = express();

// Import Routings
const authRoutes = require('./router/auth');
const userRoutes = require('./router/user');

// Configure Body Parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configure Static Folder
app.use(express.static('./uploads'))

// Configure Header HTTP - CORS
app.use(cors());


// Configure Routings
app.use(`/api/${process.env.API_VERSION}`, authRoutes);
app.use(`/api/${process.env.API_VERSION}`, userRoutes);


module.exports = app;