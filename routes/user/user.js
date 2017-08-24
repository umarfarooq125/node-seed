'use strict';

var router = require('express').Router(),
    common = require('../../lib/common'),
    userServices = require(common.commonRoute('business', 'users', 'users.js'));

router.route('/register')
    .all((req, res, next) => {
        if (req.body.email === undefined)
            common.commonResponse(res, 400, 'Bad request');
        else
            next();
    })
    .post((req, res) => {
        userServices.registerUser(req.body).then((data) => {
            common.commonResponse(res, 200, data);
        }, (err) => {
            common.commonResponse(res, 404, err);
        });
    });

module.exports = router;