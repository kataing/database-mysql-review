const router = require('express').Router();
const controller = require('./controller');

router
  .route('/name')
  .get(controller.get)
  .post(controller.post);

router
  .route('/id/:id')
  .delete(controller.delete)
  .put(controller.update);

module.exports = router;
