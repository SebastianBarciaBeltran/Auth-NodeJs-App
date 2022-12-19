const { resp } = require('express');
const { validationResult } = require('express-validator');

const loginUser =  (request, response) => { 
    
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    
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
    const errors = validationResult(request);
    const { name, email, password } = request.body;

    if (!errors.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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