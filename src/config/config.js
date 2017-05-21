'use strict';

module.exports = {
    environment: process.env.NODE_ENV || 'development',
    host: process.env.CASHBACK_API_HOST || 'localhost',
    port: process.env.CASHBACK_API_PORT || 3000,
    domainName: process.env.CASHBACK_DOMAIN_NAME,
    publicServerName: process.env.CASHBACK_PUBLIC_SERVER_NAME || 'www',
    apiServerName: process.env.CASHBACK_API_SERVER_NAME || 'api',
    auth: {
        key: process.env.CASHBACK_SIGNIN_PRIVATE_KEY || 'Insanely long and ultrasecure WASTED private key goes here!',
        rounds: 10,
        options: {algorithm: 'HS512', expiresIn: 60 * 60 * 24 * 7}
    },
    forgotPassword: {
        tokenLength: 32,
        expirationSeconds: 24 * 60 * 60
    },
    attachment: {
        maxFileSize: 200 * 1024 * 1024
    },
    image: {
        maxFileSize: 2 * 1024 * 1024
    },
    verifyEmail: {
        tokenLength: 32,
        expirationSeconds: 30 * 24 * 60 * 60
    }
};