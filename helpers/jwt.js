const jwt = require('jsonwebtoken');

const generateJwt = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid};

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '72h'
        }, (err, token) => {
        if (err) {
            reject('Error in the server');
        } else {
            resolve(token);
        }
        });
    });
}

module.exports = {
    generateJwt
}