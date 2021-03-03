var Sequelize = require('sequelize');
var userName = 'sa';
var password = ''; // update me
var hostName = 'localhost';
var dbName = 'dustBiter';

var dustBiterDB = new Sequelize(dbName, userName, password, {
    dialect: 'mssql',
    host: hostName,
    port: 1433, //default port
    logging: false,

    dialectOptions: {
        requestTimeout: 30000 // timeout = 30s
    }
});

//define models 
var Url = dustBiterDB.define('url', {
    shortUrlId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    longURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortURL: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = Url;