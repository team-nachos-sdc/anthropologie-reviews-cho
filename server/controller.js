const Products = require('../database/index.js');

const getOne = (req, res) => {
  let { productId } = req.params;
  Products.find({product_id: productId.toString()})
    .then((data)=> {res.status(200).send(data)})
    .catch(err => console.log(`error: ${err}`))
}

const postOne = (req, res) => {
  let { product_id, product_category, reviews } = req.body
  Products.create({product_id, product_category, reviews})
  .then(() => {res.status(200).send("posted")})
  .catch(err => console.log(`error: ${err}`))
}

const updateOne = (req, res) => {
  let { product_id } = req.params;
  let { product_category, reviews  } = req.body;
  Products.findByIdAndUpdate(product_id,{product_category, reviews})
  .then((data) => {res.status(200).send(data)})
  .catch(err => console.log(`error: ${err}`))
}


const deleteOne = (req, res) => {
  let { productId } = req.params;
  Product.remove({product_id: productId.toString()})
  .then(()=> {res.status(200).send("deleted")})
  .catch(err => console.log(`error: ${err}`))
}










module.exports = {
  getOne,
  postOne,
  updateOne,
  deleteOne
};










// const { 
//   getReviews,
//   getAllReviews } = require('../database/dbhelpers.js');


// const controller = {
//   // get: (req, res) => {
//   //   const productId = req.data.config.params.productId;
//   //   getReviews(productId)
//   //     .then((data) => {
//   //       res.status(200).send(data);
//   //     })
//   //     .catch((err) => {console.log(err)})
//   // },
//   getAll: (req, res) => {
//     getAllReviews()
//       .then((data) => {
//         res.status(200).send(data);
//       })
//       .catch((err) => {console.log(err)})
//   }
// }
