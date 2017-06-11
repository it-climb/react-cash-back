'use strict';
const models = require('./../../models');
const model = models['Users'];

const UsersService = {

    getAll: () => {
        return model.findAll({});
    },

    create: userObject => {
        console.log('users service create userObject:', userObject);
        let userDefault = {
            email_verified: false,
            professionId : 'c47eb311-3866-4b8c-899d-b06855957d68', //Программ
            roleId : '49020a96-3872-41d4-84d5-ad1d0a411f33' //client
        };
        let user = Object.assign({}, userObject, userDefault);
        return model.create(user);
    },
}

module.exports = UsersService;
