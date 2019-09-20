// const Sequelize = require('sequelize');
// const db = require('../databaseSql/indexSql.js/index.js');


// /* schema  */ 
// const productSchema = db.define('reviews', {
//   product_id: {
//     type: Sequelize.NUMBER,
//     unique: true
//   },
//   product_category: {
//     type: Sequelize.STRING,
//   },
//   reviews: [{
//     username: {
//       type: Sequelize.STRING,
//     },
//     location: {
//       type: Sequelize.STRING,
//     },
//     age: {
//       type: Sequelize.STRING,
//     },
//     body_type: {
//       type: Sequelize.STRING,
//     },
//     height: {
//       type: Sequelize.STRING,
//     },
//     rating: {
//       type: Sequelize.NUMBER,
//     },
//     title: {
//       type: Sequelize.STRING,
//     },
//     review: {
//       type: Sequelize.STRING,
//     },
//     fits: {
//       type: Sequelize.STRING,
//     },
//     fit_purchased: {
//       type: Sequelize.STRING,
//     },
//     size_purchased: {
//       type: Sequelize.STRING,
//     },
//     size: {
//       type: Sequelize.STRING,
//     },
//     recommends: {
//       type: Sequelize.BOOLEAN,
//     },
//     date: {
//       type: Sequelize.STRING,
//     },
//     category: {
//       type: Sequelize.STRING,
//     }
//   }]
// }, {
//   timestamps: false
// })

// productSchema
//   .sync()
//   .then(() => console.log("database has been synced"))
//   .catch(err => console.log('database not synced'))



// module.exports = productSchema;

