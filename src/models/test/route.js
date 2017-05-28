'use strict';

const TestService = require('./service'),
    path = 'test';

module.exports = [
    {
        method: 'GET',
        path: `/${path}`,
        handler: (req, res) => {
            TestService.getAll()
                .then(testData=>{
                    res.send(testData);
                })
                .catch(err=> {
                    console.error('err');
                    res(err);
                });

        }
    }
];