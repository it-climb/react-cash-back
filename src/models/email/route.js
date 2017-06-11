'use strict';

const EmailService = require('./service'),
    path = 'email';

module.exports = [
    {
        method: 'POST',
        path: `/${path}/send`,
        handler: (req, res) => {
            EmailService.sendEmail(req, res);
        }
    },
    {
        method: 'POST',
        path: `/${path}/verify`,
        handler: (req, res) => {
            EmailService.verifyEmail(req, res);
        }
    }
];