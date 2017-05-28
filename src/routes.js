'use strict';
const express = require('express');
const router = express.Router();

let finder = require('fs-finder'),
    _ = require('lodash'),
    routes = [];

module.exports =  _.flatten(finder.from('src/').findFiles("route.js").reduce((storage, file) => {
        storage.push(require(file));
        return storage;
    }, routes)).map(function(route) {
            return router[route.method.toLowerCase()](
                route.path,
                route.handler
            );
    });

