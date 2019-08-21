const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3001', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //we're connected
})
//schema
var ProductModel = mongoose.model('ProductModel', {
  product_id: { type: String, require: true, unique: true },
  reviews: [{
    username: { type: String, require: true, unique: true },
    location: String,
    age: Number,
    body_type: String,
    height: Number,
    rating: Number,
    title: String,
    review: String,
    fits: String,
    fit_purchased: String,
    size_purchased: String,
    size: String,
    recommends: Boolean,
    date: Date
  }],
})

const Products = mongoose.model('Models', ProductModel);
// var productSchema = new mongoose.Schema({
//   product_id: { type: String, require: true, unique: true },
//   reviews: { type: Array },
// })

