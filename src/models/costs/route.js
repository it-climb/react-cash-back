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

     // console.log("26");
     // console.log("req.body", req.body);
     // console.log("req.payload", req.payload);
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

        res.send(200);

    }
  },
];

// const
//     boom = require('boom'),
//     ClientService = require('./service'),
//     logger = require('./../../config/log'),
//     Utils = require('./../../utils/utils'),
//     path = 'clients';
//
// module.exports = [
//     {
//         method: 'GET',
//         path: `/${path}/{id}`,
//         config: {
//             auth: false
//             // plugins: {
//             //     joinTarget: 'Client'
//             // }
//         },
//         handler: (request, reply)=> {
//             let {id}=request.params,
//                 {include} = request;
//             ClientService.getById({id, include})
//                 .then(reply)
//                 .catch(err=> {
//                     logger.warn(`Failed to fetch Case [${id}]`, err);
//                     reply(err);
//                 })
//
//         }
//     },
//     {
//         method: 'GET',
//         path: `/${path}/all`,
//         config: {
//             auth: false
//             // auth: 'token'
//         },
//         handler: (request, reply)=> {
//             ClientService.getAllClients()
//                 .then(reply)
//                 .catch(err=> {
//                     logger.warn(`Failed to load credits All`, err);
//                     reply(err);
//                 })
//         }
//     },
//     {
//         method: 'PUT',
//         path: `/${path}/{id}/billing`,
//         config: {
//             auth: 'token',
//             plugins: {
//                 joinTarget: 'Client',
//                 policies: ['canUpdateClient']
//             }
//         },
//         handler: (request, reply)=> {
//             let {id} = request.params,
//                 {stripeToken} = request.payload,
//                 auth = request.auth.credentials;
//             ClientService.updateBilling({id, stripeToken, auth})
//                 .then(reply)
//                 .catch(err=> {
//                     logger.warn(`Failed to update billing for Client [${id}]`, err);
//                     reply(boom.wrap(err,err.type==='StripeCardError'?err.statusCode:500,err.message));
//                 })
//         }
//     },
//     {
//         method: 'GET',
//         path: `/${path}/{id}/billing`,
//         config: {
//             auth: 'token',
//             plugins: {
//                 policies: ['canUpdateClient']
//             }
//         },
//         handler: (request, reply)=> {
//             let {id} = request.params;
//             ClientService.getBillingData(id)
//                 .then(reply)
//                 .catch(err=> {
//                     logger.warn(`Failed to load billingData for Client ${id}`, err);
//                     reply(err);
//                 })
//         }
//     },
//     {
//         method: 'PUT',
//         path: `/${path}/{id}`,
//         config: {
//             auth: 'token',
//             plugins: {
//                 joinTarget: 'Client',
//                 policies: ['canUpdateClient']
//             }
//         },
//         handler: (request, reply)=> {
//             let {id} = request.params,
//                 {payload} = request;
//             ClientService.update({id, payload})
//                 .then(reply)
//                 .catch(err=> {
//                     logger.warn(`Failed to update Client [${id}]`, err);
//                     reply(err);
//                 })
//
//
//         }
//     }
// ];