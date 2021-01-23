// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');
// const crudappbackend = require('../utilities/databaseName');
const databaseName = require('../utilities/databaseName');

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
//switch username and password with your psql username and password
//${databaseName} should match package.json.name, in this case it is posteriorchain, if they dont match you may get errors
 const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://postgres:textbest2@localhost:5432/${databaseName}`);

//authenticate database connection w/ server
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export our instance of Sequelize, which will be modified with models;
module.exports = sequelize;
