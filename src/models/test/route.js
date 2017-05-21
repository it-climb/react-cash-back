'use strict';
const
    //TestService = require('./service'),
    //logger = require('./../../config/log'),
    //Utils = require('./../../utils/utils'),
    path = 'test';

module.exports = [
    {
        method: 'GET',
        path: `/${path}`,
        config: {
            auth: false,
        },
        handler: (req, res)=> {
            console.log('route test get');
            res.send('routes test get');
        }
    },
    {
        method: 'POST',
        path: `/${path}`,
        config: {
            auth: false,
        },
        handler: (req, res)=> {
            console.log('route test post');
            res.send('routes test post');
        }
    }
];