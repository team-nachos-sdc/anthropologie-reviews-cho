const Sequelize = require('sequelize');

const db = new Sequelize ('anthropologie', 'pauld', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 1000,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

db
  .authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log(`err connecting database ${err}`))
  
module.exports = db;