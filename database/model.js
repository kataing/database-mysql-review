const Sequelize = require('sequelize');
const connection = require('./index');

const Todo = connection.define('Todo', {
  name: { type: Sequelize.STRING, allowedNull: false }
},
  { timestamps: false }
);

connection
  .sync()
  .then(() => { console.log('Synced with MYSQL database!') })
  .catch(err => { console.error(err) });

module.exports = Todo;