// const { Products, Reviews } = require('./modelsSql.js');
// const db = require('./indexSql');
// // const Sequelize = require('sequelize');

// // const getReview = (productId) => {
// //   return Products.findOne({product_id: productId})
// // } 

// const getReview = (productId) => {
//   let getId = Math.floor(Math.random() * 10000001) + 1 
//    return db.query(`SELECT * FROM products RIGHT JOIN reviews ON products.category = reviews.category_id WHERE products.id = ${getId}`)
// }


// const postReview = (product_id, product_category, reviews) => {
//   return ProductModel.create({product_id, product_category, reviews})
// }

// // 
// module.exports = {
//   getReview,
//   postReview
// }