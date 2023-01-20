const { response } = require('express');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt')

const loginUser =  (request, response = response) => { 
    
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

const renewToken = (request, response = response) => { 
    return response.json({
        ok: true,
        msg: 'JWT'
    })
}

const createUser = async(request, response = response ) => { 
    const errors = validationResult(request);
    const { name, email, password } = request.body;

    try {
        // Check if email exist 
        let user = await User.findOne({ email });

        if (user) {
            return response.status(400).json({
                ok: false,
                msg: 'User exist with this email'
            });
        }   
        
        // CREATE USER WITH MODEL 
        const userDB = new User( request.body );

        // Has the password
        const salt = bcrypt.genSaltSync();
        userDB.password = bcrypt.hashSync( password, salt );


        // Generate JWT to send Angular
        const token = await generateJWT(userDB.id ,name)

        // Create User in DB 
        await userDB.save();

        // Generate the correct response 
        return response.status(201).json({
            ok: true,
            uid: userDB.id,
            name,
            token
        });

        
    } catch (error) {
        console.log('error: ', error);
        return response.status(500).json({
            ok: false,
            msg: 'Please contact to the administration'
        })
    }




} 


module.exports = {
    loginUser,
    renewToken,
    createUser
}