const jwt = require('jsonwebtoken');


const generateJWT = (uid, name, email) => {

    const payload = { uid, name, email };

    return new Promise( (resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '12h'  
        }, (error, token) => {
    
            if (error) {
                console.log(error);
                reject(error)
            } else {
                resolve(token);
            }
    
        });

    });


}


module.exports = {
    generateJWT
}