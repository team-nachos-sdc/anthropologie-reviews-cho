const express = require('express')
const router = express.Router();
const {
  getAll
} = require('./controller.js');

// router
//   .route('/:productId')
//   .get(controller.get) //get all products by productId url params

router
  .route('/getAll')
  .get(getAll)

module.exports = router;

