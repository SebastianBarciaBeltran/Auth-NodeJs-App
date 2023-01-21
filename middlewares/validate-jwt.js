const { express } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (request, response = express, next) => {

    const token = request.header('x-token');

    if (!token) {
        return response.status(401).json({
            ok: false,
            msg: 'Token error'
        });
    }

    try {
        const {uid} =  jwt.verify(token, process.env.SECRET_JWT_SEED);
        request.uid = uid;
    } catch (error) {
        console.log(error);
        return response.status(401).json({
            ok: false,
            msg: 'Invalid Token'
        });
    }

    // ALL FINE
    next();
}




module.exports = {
    validateJWT
}