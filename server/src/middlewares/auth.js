const token_util = require('../utilities/token');

module.exports = function (req, res, next) {
    // Decode accessToken into req.user
    const token = req.header('accessToken');
    if (!token) res.status(401).send('Access denied. No token provided.');
    else {
        const decoded = token_util.verifyToken(token);
        if (!decoded) {
            res.status(400).send('Invalid token');
        } else {
            req.user = decoded;
            next();
        }
    }
}
