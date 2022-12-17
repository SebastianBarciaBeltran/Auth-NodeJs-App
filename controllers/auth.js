const { resp } = require('express');

const loginUser =  (request, response) => { 
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