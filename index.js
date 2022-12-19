// Imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Create the serve/app of express
const app = express();

// public route 
app.use( express.static('public') );

// Cors
app.use( cors() );

// body
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth.routes') );

app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT } `)
});