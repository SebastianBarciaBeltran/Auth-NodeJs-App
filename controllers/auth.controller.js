const { response } = require('express');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt')

const loginUser =  async(request, response = response) => { 
    const { email, password } = request.body;

    try {

        // Check if email exist 
        const userDB = await User.findOne({email});

        if (!userDB) {
            return response.status(400).json({
                ok: false,
                msg: "Email doesn't exist"
            });
        }

        // CHECK IF THE PASSWORD HAVE MATCH WITH THE PASSWORD IN DB
        const validPassword = bcrypt.compareSync(password, userDB.password);        

        if (!validPassword) {
            return response.status(400).json({
                ok: false,
                msg: "Incorrect password"
            });
        }

        // Generate JWT to send Angular
        const token = await generateJWT(userDB.id, userDB.name)

        // Response of the services 
        return response.status(200).json({
            ok: true,
            uid: userDB.id,
            name: userDB.name,
            token
        })

        

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            ok: false,
            msg: 'Please contact to the administration'
        })   
    }
}

const createUser = async(request, response = response ) => { 
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
        const token = await generateJWT(userDB.id, name)

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

const renewToken = (request, response = response) => { 

    const token = request.header('x-api-key');


    if (!token) {
        return response.status(401).json({
            ok: false,
            msg: 'Token error'
        });
    }


    return response.json({
        ok: true,
        msg: 'JWT',
        token
    })
}

module.exports = {
    loginUser,
    renewToken,
    createUser
}