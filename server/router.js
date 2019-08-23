const router = require('express').Router();
const controller = require('./controller.js');

router
  .get(controller.get) //get all products by productId url params


module.exports = router;

