// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');
// const crudappbackend = require('../utilities/databaseName');
const databaseName = require('../utilities/databaseName');

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
// const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, { logging: false });

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://postgres:textbest2@localhost:5432/${databaseName}`);

sequelize.authenticate().then(() => {
    console.log("connection success");
}).catch(err => {
    console.error("cant connect", err);
});

// Export our instance of Sequelize, which will be modified with models;
module.exports = sequelize;
