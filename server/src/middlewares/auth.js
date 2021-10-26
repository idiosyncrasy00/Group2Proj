const token_util = require('../utilities/token');

module.exports = function (req, res, next) {
    // Decode accesstoken into req.user
    const token = req.header('accesstoken');
    if (!token) res.status(401).send('Access denied. No token provided.');
    else {
        const decoded = token_util.verifyToken(token);
        if (!decoded) {
            res.status(401).send('Invalid token');
        } else {
            req.user = decoded;
            next();
        }
    }
}
