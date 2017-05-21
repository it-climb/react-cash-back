'use strict';
const models = require('./../../models'),
    model = models['Test'];;

const TestService = {

    getAll: () => {
        return model.findAll({});
    },
}

module.exports = TestService;