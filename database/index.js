const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://paul:password@18.191.69.198/anthropologie', {useNewUrlParser: true})
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


productSchema.index({"product_id": 1})
  .then(() => console.log("index created"))
  .catch((err) => console.log("index err",err))

var Product = mongoose.model('reviews', productSchema);

module.exports = Product;


