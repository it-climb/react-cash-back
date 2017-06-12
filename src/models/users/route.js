'use strict';
const {ValidationError, DBError} = require('./../../utils/errors');
const
  Utils = require( './../../utils/validator'),
  UsersService = require('./service'),
  path = 'users';

module.exports = [
  {
    method: 'GET',
    path: `/${path}`,
    handler: (req, res) => {
      UsersService.getAll()
        .then(testData => {
          res.send(testData);
        })
        .catch(err => {
          console.error('route users GET error');
          res.send(err);
        });
    }
  },
  {
    method: 'GET',
    path: `/${path}/findEmail`,
    handler: (req, res) => {
      const email = req.query.email;
      if(Utils.validator(email, 'email')){
        UsersService.findEmail(email)
          .then(testData => {
            // console.log('route findEmail testData', testData);
            if(testData > 0){
              console.log('This email is exists');
              res.sendStatus(409);
            }else{
              console.log('This email is unique');
              res.sendStatus(200);
            }
          })
          .catch(err => {
            console.error('route users findEmail error');
            res.sendStatus(400);
          });
      }else{
        console.log('email validation error');
        res.sendStatus(400);
      }
    }
  },
  {
    method: 'POST',
    path: `/${path}`,
    handler: (req, res) => {
      let {firstName, lastName, login, email, password} = req.body;
      let userObject = {firstName, lastName, login, email, password};
      for (var val in userObject) {
        if (!Utils.validator(userObject[val], val)) {
          res.sendStatus(400);
        }
      }
      UsersService.findEmail(email)
        .then(data1 => {
          // console.log('46 create dataCountEmail:', data);
          if (data1 > 0) {
            console.log("1 email is not unique");
            throw new ValidationError("2 email is not unique");
          }
          return UsersService.create(userObject);
        })
        .then(data2 => {
          res.send(data2);

        })
        .catch(ValidationError => {
          console.log("users router75: ", ValidationError);
        })
        .catch(err => {
          console.error('err');
          res.send(err);
        });
    }
  },
];
