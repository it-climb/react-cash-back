'use strict'
const Utils = {
  validator: (valToCheck = '', valType = 'name') => {
    switch (valType) {
      case 'name':
      case 'firstName':
      case 'lastName':
        return /^([a-zA-ZйцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮёЁіІїЇєЄ`’\-])+$/i.test(valToCheck.trim());
      case 'login':
        return /^([a-zA-Z][a-zA-Z0-9_\-]+)$/i.test(valToCheck.trim());
      case 'email':
        return /^(([\w\-+'`\.])+@(([\w\-]+)\.)+[a-zA-Z][a-zA-Z]+)$/.test(valToCheck.trim());
      case 'phone':
        return /^([\d])+$/i.test(valToCheck.trim());
      case 'password':
      case 'confirmPassword':
        return /^([\w\d\-])+$/i.test(valToCheck.trim());
        return false;
    }
  },
}

module.exports = Utils;

