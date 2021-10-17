const jwt = require('jsonwebtoken');

var privateKey = 'privateKey';  // WORK: Use environment variiable instead

function generateToken(userToken) {
    return jwt.sign(userToken, privateKey);
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, privateKey);
        return decoded;
    } catch(error) {
        return null;
    }
}

module.exports = { generateToken, verifyToken };
