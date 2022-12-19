const { resp } = require('express');
const { validationResult } = require('express-validator');

const loginUser =  (request, response) => { 
    
    const errors = validationResult(request);
    console.log(errors);
    
    const { email, password } = request.body;

    return response.json({
        ok: true,
        msg: 'Logged'
    })
}

const renewToken = (request, response) => { 
    return response.json({
        ok: true,
        msg: 'JWT'
    })
}

const createUser = (request, response = resp ) => { 
    const { name, email, password } = request.body;
    console.log('createUser:', name, email, password);

    return response.json({
        ok: true,
        msg: 'create user /new'
    })
} 


module.exports = {
    loginUser,
    renewToken,
    createUser
}