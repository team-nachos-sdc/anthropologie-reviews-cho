const ProductModel = require('./index.js');

const getReview = (productId) => {
  return ProductModel.findOne({product_id: productId})
} 

const postReview = (product_id, product_category, reviews) => {
  return ProductModel.create({ product_id, product_category, reviews })
}


module.exports = {
  getReview,
  postReview
}




//grabs the product reviews

// const getAllReviews = () => {
//   return ProductModel.find((err, products) => {
//     if(err) {console.log(`error: ${err}`)}
//     else {
//       return products
//     }
//   })
// }

// getAllReviews()
// .then((data) => {console.log(`data: ${JSON.stringify(data)}`)})
// .catch((err) => {console.log(`err: ${err}`)})


// getReviews()
//   .then((data) => {
//     console.log(`this is the data: ${JSON.stringify(data)}`)
//   })
//   .catch((err) => {console.log(err)})

// getAllReviews()
//   .then((data) => {
//     console.log(`this is the data: ${JSON.stringify(data)}`)
//   })
//   .catch((err) => {console.log(err)})
