//import ProductModel from './index.js'; NOT USING THIS
const ProductModel = require('./index.js');

const getReviews = (productId) => {
  return ProductModel.find({product_id: productId})
} //grabs the product reviews

const getAllReviews = () => {
  return ProductModel.find((err, products) => {
    if(err) {console.log(`error: ${err}`)}
    else {
      return products
    }
  })
}



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

module.exports = {
  getReviews,
  getAllReviews
}