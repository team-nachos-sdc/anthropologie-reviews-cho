const  { getReview, postReview } = require('../database/dbhelpers');
// const { getReview, postReview } = require('../database/dbhelpersSql.js');

const getOne = (req, res) => {
  let { productId } = req.params;
  getReview(productId)
    .then((data)=> {res.status(200).send(data)})
    .catch(err => console.log(`error: ${err}`))
}

const postOne = (req, res) => {
  let { product_id, reviews } = req.body
  console.log("tagging it",req.body)
  postReview(product_id, reviews)
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

// postgresSql
// const getOne = (req, res) => {
//   let { productId } = req.params;
//   getReview(productId)
//     .then((data)=> {res.status(200).send(data)})
//     .catch(err => console.log(`error: ${err}`))
// }


// module.exports = { getOne };




