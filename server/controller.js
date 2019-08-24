const Products = require('../database/index.js');

const getAll = (req, res) => {
  Products.find()
    .then(data => res.status(200).send(data))
    .catch(err => console.log(`error: ${err}`))
}

module.exports = {
  getAll
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
