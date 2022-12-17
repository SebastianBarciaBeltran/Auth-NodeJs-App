const express = require('express');
const cors = require('cors');

// Create the serve/app of express
const app = express();

// Cors
app.use( cors() );

// body
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );


app.listen( 4000, () => {
    console.log(`Server running in port ${ 4000 } `)
});