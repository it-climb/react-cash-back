'use strict';

// const express = require('express');
// const router = express.Router();
//
// router.get('/test', function(req, res) {
//     res.send('Test');
// });
//
// module.exports = router;

const path = 'test';

console.log('test  routes');

module.exports = [
    {
        method: 'GET',
        path: '/test',
        handler: (req, res) => {
            console.log('test XAXAXA TEST');
            res.send('TEST routestest');
        }
    }
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