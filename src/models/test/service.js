'use strict';
const
    Promise = require('bluebird'),
    boom = require('boom'),
    // validator = require('validator'),
    /**@type {Object.<String,Model>}*/
    models = require('./../../models'),
    /**@type {Model.<Test>}*/
    model = models['Test'];


const TestService = {
    /**
     * @param {String|UUID}data.id
     * @param {String} [data.order]
     * @param {Boolean} [data.desc]
     * @return {Promise.<Instance.<Transaction>[],error>}
     */
    getTestsById: data=> {
        if (typeof data !== 'object') {
            return Promise.reject(boom.badData('Get All Tests: missing payload object'));
        }
        let query = {
            where: {},
            order: [],
            include: [{
                required: true,
                where: {testId: data.id}
            }]
        };
        return model.findAll(query);
    }
};

module.exports = TestService;