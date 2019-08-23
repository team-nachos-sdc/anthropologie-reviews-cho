import ProductsModel from '../database/models.js';

const controller = {
  get: (req, res) => {
    res.status(200).send(console.log('okkk!!!!'))
  }
}

module.exports = controller;