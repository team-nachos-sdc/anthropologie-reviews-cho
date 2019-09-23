const Sequelize = require('sequelize');
const db = require('./indexSql.js');

/* schema  */ 
const Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true
  },
  category: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false
})

const Reviews = db.define('reviews', {
  category_id: {
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
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING
  },
  review: {
    type: Sequelize.STRING(1500),
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

// Products.hasMany(Reviews, {foreignKey: 'category_id', sourceKey: 'category'});
// Reviews.belongsTo(Products, {foreignKey: 'category', targetKey: 'category_id'});

Products.hasMany(Reviews, {foreignKey: 'category_id'});
Reviews.belongsTo(Products, {foreignKey: 'category'});

db
  .sync()
  .then(() => console.log("database has been synced"))
  .catch(err => console.log('database not synced', err))



module.exports = {
   Products, 
   Reviews 
  };

