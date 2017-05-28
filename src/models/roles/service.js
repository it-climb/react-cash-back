'use strict';
const models = require('./../../models');
const model = models['Roles'];

const RolesService = {

    getAll: () => {
        return model.findAll({});
    },
}

module.exports = RolesService;