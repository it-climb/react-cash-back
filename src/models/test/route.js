// 'use strict';
//
// module.exports = [
//     {
//         method: 'GET',
//         path: `/test`,
//         config: {
//             auth: false,
//         },
//         handler: ( request, reply ) => {
//        console.log("task2")
//         }
//     }];

const express = require('express');
const router = express.Router();

router.get('/test', function(req, res) {
  res.send('Test');
});

module.exports = router;