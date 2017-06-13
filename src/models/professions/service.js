'use strict';
const models = require('./../../models');
const model = models['Professions'];

const ProfessionsService = {

    getAll: () => {
        return model.findAll({});
    },
}

module.exports = ProfessionsService;