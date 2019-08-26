const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3001', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //we're connected
  console.log('connected to mongoose')
})
//schema
var productSchema = new mongoose.Schema({
  product_id: String,
  product_category: String,
  reviews: [{
    username: String,
    location: String,
    age: String,
    body_type: String,
    height: String,
    rating: Number,
    title: String,
    review: String,
    fits: String,
    fit_purchased: String,
    size_purchased: String,
    size: String,
    recommends: Boolean,
    date: String
  }],
})

var Product = mongoose.model('productmods', productSchema);


module.exports = Product;

