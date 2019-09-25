const express = require('express')
const router = express.Router();
const {
  getOne,
  postOne,
  updateOne,
  deleteOne
} = require('./controller.js');


router
  // .route('/review/:productId')
  .route('/review')
  .get(getOne)

  router
    .route('/review')
    .post(postOne)

router
  .route('/review/:product_id')
  .put(updateOne)

router
  .route('/review/:productId')
  .delete(deleteOne)

module.exports = router;

