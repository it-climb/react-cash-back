'use strict';

const EmailService = require('./service'),
    path = 'email';

module.exports = [
    {
        method: 'POST',
        path: `/${path}`,
        handler: (req, res) => {
            EmailService.sendTest(req, res);
        }
    }
];