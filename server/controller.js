const Todo = require('../database/model');

const controller = {
  get: (req, res) => {
    // grab data from our database
    // send our data to the users
    // statusCode will be 200
    Todo
      .findAll({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.error('your get is erroring')
        res.status(404).send('Error');
      });
  },
  post: (req, res) => {
    const { name } = req.body;
    Todo
      .create({ name })
      .then(() => {
        res.status(201).send('your post is up and running!');
      })
      .catch((err) => {
        console.log.err(err);
        res.status(404).send('Error');
      })
  },
  delete: (req, res) => {
    const { id } = req.params;
    Todo.destroy({ where: { id } })
      .then(() => {
        res.status(200).send(`Destroy id ${id}`)
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send('Error');
      });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    Todo
      .update( {name}, { where: { id }})
      .then(() => {
        res.status(202).send('Update works!');
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send('Error');
      });
  }
};

module.exports = controller;
