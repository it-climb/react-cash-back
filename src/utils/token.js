'use strict'
const
  _ = require('lodash'),
  Promise = require('bluebird'),
  jwt = require('jsonwebtoken'),
  boom = require('boom'),
  config = require('./../config/config');

const generateToken = user => {
  if (_.isEmpty(user.email) || _.isEmpty(user.password)) {
    return Promise.reject(boom.badRequest("User email and password can not be empty"));
  }
  const inpData = user.email + "/" + user.password;
  return Promise.resolve({
    token: jwt.sign(
      {
        user: inpData
      },
      "itclimbe"
    ),
    userId: user.userId || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    login: user.login || "",
    email: user.email,
    professionId: user.professionId || "",
    expiresIn: config.auth.options.expiresIn,
  })
    .catch(err => {
      throw err;
    });
}

module.exports = generateToken;