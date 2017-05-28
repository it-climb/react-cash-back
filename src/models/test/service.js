'use strict';
const models = require('./../../models');
const model = models['Test'];

const TestService = {

    getAll: () => {
        return model.findAll({});
    },

    sendMail: () => {

    }
}

module.exports = TestService;