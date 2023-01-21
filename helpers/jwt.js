const jwt = require('jsonwebtoken');


const generateJWT = (uid) => {

    const payload = { uid };

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