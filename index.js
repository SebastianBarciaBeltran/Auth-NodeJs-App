// Imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log(process.env);

// Create the serve/app of express
const app = express();

// Cors
app.use( cors() );

// body
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );


app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT } `)
});