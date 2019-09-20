const ProductModel = require('./indexSql.js');
const { Products, Reviews } = require('./indexSql.js');

const getReview = (productId) => {
  return ProductModel.findOne({product_id: productId})
} 

const postReview = (product_id, product_category, reviews) => {
  return ProductModel.create({product_id, product_category, reviews})
}



module.exports = {
  getReview,
  postReview
}