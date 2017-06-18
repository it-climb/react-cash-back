'use strict';

const RolesService = require('./service'),
  path = 'roles';

module.exports = [
  {
    method: 'GET',
    path: `/${path}`,
    handler: (req, res) => {
      RolesService.getAll()
      .then(testData=>{
          res.send(testData);
        })
      .catch(err=> {
          console.error('err');
          res.send(err);
        });

    }
  }
];
