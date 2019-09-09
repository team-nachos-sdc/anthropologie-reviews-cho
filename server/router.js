const express = require('express')
const router = express.Router();
const {
  getOne
} = require('./controller.js');

// router
//   .route('/:productId')
//   .get(controller.get) //get all products by productId url params
router
  .route('/review/:productId')
  .get(getOne)

module.exports = router;

