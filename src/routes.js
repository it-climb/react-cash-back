'use strict';

let finder = require('fs-finder'),
    _ = require('lodash'),
    routes = [];

function loadRoutesData(routeStorage) {
    return _.flatten(finder.from('src/').findFiles("route.js").reduce((storage, file) => {
        storage.push(require(file));
        return storage;
    }, routeStorage));
}
/**
 * @exports routes
 */
module.exports = loadRoutesData(routes);

// const express = require( 'express' ),
//     router  = express.Router(),
//     fs      = require( 'fs' ) ;
//
// fs.readdirSync( __dirname + '/models/' ).forEach( function( route ) {
//
//     // File path
//     const routeFile = route + '/route.js';
//     console.log( 'Loading route ' + route + '...' ) ;
//     // Mount router
//     router.use(require( './models/' + routeFile ) ) ;
//
// } ) ;
//
// module.exports = router;
