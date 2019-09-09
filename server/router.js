const express = require('express')
const router = express.Router();
const {
  getOne
} = require('./controller.js');


router
  .route('/review/:productId')
  .get(getOne)

module.exports = router;

