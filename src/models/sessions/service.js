'use strict';
/**
 * @typedef {Object} AuthResult
 * @property {String} token - authentication token
 * @property {Number} expiresIn - expiration period in seconds
 * @property {String|UUID} userId
 * @property {String} domain
 */
const
  _ = require('lodash'),
  Promise = require('bluebird'),
  boom = require('boom'),
  generateToken = require('./../../utils/token'),
  models = require('./../../models'),
  model = models['Users'];

let SessionsService = {
  /**
   * Method that accepts login and password, and returns signed JWT token, is provided credentials are valid
   * @param {String} email
   * @param {String}password
   * @return {Promise.<AuthResult,Error>}
   */
  authenticate: (email, password) => {
    if (_.isEmpty(email)) {
      return Promise.reject(boom.badRequest("Email can not be empty"));
    }
    if (_.isEmpty(password)) {
      return Promise.reject(boom.badRequest("Password can not be empty"));
    }
    const passwordDb = password;
    return model.findOne({where: {email: email}})
      .then(/**Instance.<User>*/user => {
        if (!user) {
          throw boom.unauthorized(`sessions service. User with email ${email} not found`);
        }
        if (passwordDb !== user.password) {
          throw boom.unauthorized(`sessions service. User password with email ${email} ERROR`);
        }
        return generateToken(user);
      })
      .then((token) => {
        if (!token) {
          throw boom.unauthorized("Login and password mismatch!");
        }
        return token;
      })
      .catch(err => {
        console.log('sessions service err', err);
        throw err;
      });
  },

  // /**
  //  * Generate signed JWT token by provided user object
  //  * @param {Instance.<User>} user
  //  * @return {Promise.<AuthResult,Error>}
  //  */
  // generateToken: (user) => {
  //   if (_.isEmpty(user)) {
  //     return Promise.reject(boom.badRequest("User can not be empty"));
  //   }
  //   return Promise.resolve({
  //     token: jwt.sign(
  //       {
  //         user: SessionsService._cleanUser(user)
  //       },
  //       // config.auth.key,
  //       // config.auth.options
  //     ),
  //     // expiresIn: config.auth.options.expiresIn,
  //     // domain: `${config.publicServerName}.${config.domainName}`,
  //     userId: user.userId
  //   })
  //     .catch(err => {
  //       // logger.error(error);
  //       throw  err;
  //     });
  // },
  // /**
  //  * @param {Instance.<User>|User}user
  //  * @return {Object}
  //  * @private
  //  */
  // _cleanUser: user => {
  //   // let fieldsToSkip = ['created_at', 'createdAt', 'updated_at', 'updatedAt'];
  //   // return JSON.parse(JSON.stringify(user.toJSON(), (key, value) => fieldsToSkip.indexOf(key) !== -1 ? void(0) : value))
  //   const fieldsToToken = ['email', 'password'];
  //   return JSON.parse(JSON.stringify(user.toJSON(), (key, value) => fieldsToToken.indexOf(key) !== -1 ? value : void(0)))
  // },

};

module.exports = SessionsService;