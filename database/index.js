const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/anthropologie', {useNewUrlParser: true})
.then(() => console.log('db connected'))
.catch((err) => console.log('db not connected'))

//schema for mongoose
var productSchema = new Schema({
  product_id: Number,
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
    date: String,
    category: String
  }],
})

var Product = mongoose.model('reviews', productSchema);

module.exports = Product;


