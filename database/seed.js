const Todo = require('./model');

const data = [
  {
    name: 'John'
  },
  {
    name: 'Andrew'
  },
  {
    name: 'Brian'
  }
];

Todo
  .sync({ force: false })
  .then(() => {
    Todo
      .bulkCreate(data)
      .then(() => {
        console.log('Add in data');
      })
      .catch((err) => {
        console.error('Could not add data');
      })
  })
  .catch((err) => {
    console.err('Could not sync');
  });