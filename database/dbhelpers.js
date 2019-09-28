const ProductModel = require('./index.js');

const getReview = (productId) => {
  let getId = Math.floor(Math.random() * 10000001) + 1 
  return ProductModel.findOne({product_id: getId}).lean()
} 

const postReview = (product_id, reviews) => {
  console.log(product_id);
  return ProductModel.create({ product_id, reviews })
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
