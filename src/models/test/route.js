'use strict';
const
    boom = require('boom'),
    TestService = require('./service'),
    path = 'test';

module.exports = [
    {
        method: 'GET',
        path: `/${path}/getTestsById/{id}`,
        config: {
            auth: 'none'
        },
        handler: (request, reply) => {
            let {id} = request.params;
                TestService.getTestsById(id)
                .then(reply)
                .catch(err => {
                    logger.warn(`Failed to fetch Tests`, err);
                    reply(err);
                })
        }
    }
];