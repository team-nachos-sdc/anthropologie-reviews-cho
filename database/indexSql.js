const Sequelize = require('sequelize');

const db = new Sequelize ('anthropologie', 'pauld', 'password', {
  host: 'localhost',
  dialect: 'postgres'
})

db
  .authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log(`err connecting database ${err}`))


module.exports = db;