const express = require( 'express' ),
    router  = express.Router(),
    fs      = require( 'fs' ) ;

fs.readdirSync( __dirname + '/models/' ).forEach( function( route ) {

    // File path
    const routeFile = route + "/route.js";
    console.log( 'Loading routeFile:' + routeFile +' route: ' + route + '...' ) ;
    // Mount router
    router.use(require( './models/' + routeFile ) ) ;

} ) ;

module.exports = router;