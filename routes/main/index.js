'use strict';

var common = require('../../lib/common.js'),
    userRoute = require(common.commonRoute('route', 'user', 'user.js'));


module.exports = (app) => {
    app.use('/api/user', userRoute);
};