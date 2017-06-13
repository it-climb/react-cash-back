'use strict';
const models = require('./../../models');
const model = models['Users'];
const EmailService = require('./../email/service');
const Crypto = require( './../../utils/crypto');

const UsersService = {

    getAll: () => {
        return model.findAll({});
    },

    findEmail: email => {
        console.log('users service findEmail:', email);
        return model.count({where:{email: email}});
    },

    create: userObject => {
        console.log('users service create userObject:', userObject);
        let userDefault = {
            email_verified: false,
            roleId : 'abc414c8-1c61-4308-85de-1c34ce07f731' //client
        };
        let user = Object.assign({}, userObject, userDefault);
        return model.create(user);
    },
}

model.afterCreate((userObject, options, next)=>{
  const email = userObject.email;
  const secretKey = Crypto.encrypt(email);
  EmailService.sendServerEmail(email, secretKey);
  next();

});

module.exports = UsersService;
