'use strict';

const UsersService = require('./service'),
  path = 'users';

module.exports = [
  {
    method: 'GET',
    path: `/${path}`,
    handler: (req, res) => {
      UsersService.getAll()
      .then(testData=>{
          res.send(testData);
        })
      .catch(err=> {
          console.error('err');
          res.send(err);
        });

    }
  },
    {
    method: 'POST',
    path: `/${path}`,
    handler: (req, res) => {

      let {firstName, lastName, login, email, password} = req.body;
      let userObject = { firstName, lastName, login, email, password };
      UsersService.create(userObject)
      .then(testData=>{
          res.send(testData);
        })
      .catch(err=> {
          console.error('err');
          res.send(err);
        });
    }
  },
];
