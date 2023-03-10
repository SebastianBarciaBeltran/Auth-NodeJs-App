// Imports
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config')

require('dotenv').config();

// Create the serve/app of express
const app = express();

// Conexion to DB
dbConnection();

// public route 
app.use( express.static('public') );

// Cors
app.use( cors() );

// body
app.use( express.json() );

// Routes
app.use( '/api', require('./routes/auth.routes') );

app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT } `)
});