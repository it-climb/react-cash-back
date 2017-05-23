const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = 'development';
// const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/config/sequelize.json`)[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(
        config.database, config.username, config.password, config
    );
}

fs.readdirSync( __dirname + '/models/' ).forEach( function( file ) {

    const fileModel = file + '/model.js';
    const model = sequelize.import(path.join(__dirname + '/models/' + fileModel))
    console.log( 'Loading model ' + model.name + '...' );

    db[model.name] = model;
} ) ;

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;