'use strict';
const
  SessionsService = require('./service'),
  boom = require('boom'),
  // logger = require('./../../config/log'),
  path = 'sessions';

module.exports = [
  {
    method: 'POST',
    path: `/${path}`,
    // config: {
    //     auth: false
    // },
    handler: (req, res) => {
      SessionsService.authenticate(req.body.email, req.body.password)
        .then(/**AuthResult*/(token) => {
          if (!token.token) {
            console.log("route sessions 20 error !token");
            throw boom.internal('Missing fields in authentication results');
          }
          res.send(token);
        })
        .catch(err => {
          console.log("sessions 27 error post catch", err);
          res.send(err);
        })
    }
  },
  // {
  //     method: 'GET',
  //     path: `/${path}`,
  //     config: {
  //         auth: 'token'
  //     },
  //     handler: (request, reply)=> {
  //         reply({userId: request.auth.credentials.id});
  //     }
  // },
  // {
  //     method:'GET',
  //     path:`/${path}/logout`,
  //     config:{
  //         auth:false
  //     },
  //     handler:(request,reply)=>{
  //         return reply().unstate('access_token').redirect('/');
  //     }
  // }
];