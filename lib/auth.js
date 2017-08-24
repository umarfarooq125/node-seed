var jwt = require('jwt-simple'),
    common = require('./common'),
    secretKey = require('../configurations/key');

module.exports = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (token) {
        try {
            var decryptToken = jwt.decode(token, secretKey.development),
                encryptedUserId = decryptToken.substring(0, decryptToken.length - 40),
                userId = jwt.decode(encryptedUserId, secretKey.development);
            req._userId = userId;
            return next();
        } catch (err) {
            common.commonResponse(res, 403, {message: "Invalid token"});
        }
    } else {
        common.commonResponse(res, 403, {message: "Invalid token"});
    }
};