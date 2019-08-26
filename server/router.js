const express = require('express')
const router = express.Router();
const {
  getAll,
  getOne
} = require('./controller.js');

// router
//   .route('/:productId')
//   .get(controller.get) //get all products by productId url params

router
  .route('/getAll')
  .get(getAll)

router
  .route('/getOne/:productId')
  .get(getOne)

module.exports = router;

