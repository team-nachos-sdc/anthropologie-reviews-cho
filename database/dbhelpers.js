import ProductsModel from '../database/models.js';

const getReviews = (productId) => {
  return ProductsModel.findOne()
}