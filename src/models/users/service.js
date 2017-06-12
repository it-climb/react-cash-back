'use strict';
const models = require('./../../models');
const model = models['Users'];
const EmailService = require('./../email/service');
// const crypto = require('crypto');
const Crypto = require( './../../utils/crypto');
// const Cryptr = require('cryptr'),
//   cryptr = new Cryptr('itclimbe');

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
            professionId : 'c47eb311-3866-4b8c-899d-b06855957d68', //Программ
            roleId : '49020a96-3872-41d4-84d5-ad1d0a411f33' //client
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
