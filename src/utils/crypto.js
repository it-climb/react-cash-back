'use strict'

const Cryptr = require('cryptr'),
  cryptr = new Cryptr('itclimbe');

const Crypto = {
  encrypt: text => {
    return cryptr.encrypt(text);
  },
  decrypt: text => {
    return cryptr.decrypt(text);
  }
}

module.exports = Crypto;