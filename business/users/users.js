'use strict';

var Mongoose = require('mongoose'),
    common = require('../../lib/common.js'),
    Promise = require('promise');
var userService = {};

userService.registerUser = (param) => {
    var queryParam = {};
    if (param.email !== undefined)
        queryParam.email = param.email;
    else
        queryParam.fbId = param.fbId;
    return new Promise((resolve, reject) => {
        return resolve({ token: token });
    });
};
module.exports = userService;
