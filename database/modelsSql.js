const Sequelize = require('sequelize');
const db = require('./indexSql.js');

/* schema  */ 
const Products = db.define('products', {
  id: {
    type: Sequelize.NUMBER,
    unique: true
  },
  category: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false
})

const Reviews = db.define('reviews', {
  category: {
    type: Sequelize.STRING
  },
  body_type: {
    type: Sequelize.STRING,
  },
  height: {
    type: Sequelize.STRING
  },
  fit_purchased: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.NUMBER,
  },
  rating: {
    type: Sequelize.NUMBER,
  },
  title: {
    type: Sequelize.STRING
  },
  review: {
    type: Sequelize.STRING,
  },
  fits: {
    type: Sequelize.STRING
  },
  size_purchased: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.STRING
  },
  recommends: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  }
},{
  timestamps: false
})

db
  .sync()
  .then(() => console.log("database has been synced"))
  .catch(err => console.log('database not synced'))



module.exports = { Products, Reviews };

