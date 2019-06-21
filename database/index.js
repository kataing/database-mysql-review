const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const connection = new Sequelize('dbreview', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:3000/dbreview');

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;