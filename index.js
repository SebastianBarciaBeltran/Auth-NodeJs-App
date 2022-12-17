const express = require('express');

// Create the serve/app of express
const app = express();


// GET 
app.get('/', (request, response) => {
    
    response.status(200).json({
        ok: true,
        msg: 'All good'
    })
})


app.listen( 4000, () => {
    console.log(`Server running in port ${ 4000 } `)
});