const ProductModel = require('./index.js');
const faker = require('faker');

var age = ['18-24','25-29','30-34','35-39','40-44','45-49','50-55','Over 55']
var body_type = ['Hourglass','Straight','Rounded Torso',
                 'Shoulders narrower than hips',
                 'Hips narrower than shoulders'];
var fit_purchased = ['Petite', 'Standard','Plus','Tall'];
var size_purchased_pants = ['00','0','2','4','6','8','10','12','14','16'];
var size_purchased = ['XS','S','M','L','XL'];

var randomGen = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var getRandomItem = function (array) {
  var index = randomGen(array.length, 1) - 1
  return array[index]
}

var dateFormatter = function(date) {
  var month_names = ["Jan","Feb","Mar",
                      "Apr","May","Jun",
                      "Jul","Aug","Sep",
                      "Oct","Nov","Dec"];

  var d = new Date(date),
    month = month_names[d.getMonth() + 1],
    day = '' + d.getDate(),
    year = d.getFullYear();
  
  if(day.length < 2) { day = '0' + day };
  return [day, month, year].join('-');
}

var Product = function(product_id){
  this.product_id = product_id;
}

Product.prototype.makeCategory = function() {return this.product_id < 26 && this.product_id > 0 ? 'dress' : this.product_id > 25 && this.product_id < 51 ? 'pants' : this.product_id > 50 && this.product_id < 76 ? 'skirt' : 'bedding'}
Product.prototype.makeRating = function() {return randomGen(5, 1)};
Product.prototype.makeReviewCount = function() {return randomGen(10, 5)};
Product.prototype.makeUsername = function() {return faker.internet.userName()};
Product.prototype.makeLocation = function() {return faker.address.city() + ', ' + faker.address.stateAbbr()};
Product.prototype.makeAge = function() {return getRandomItem(age)};
Product.prototype.makeBody_type = function() {return getRandomItem(body_type)};
Product.prototype.makeHeight = function() {return `${randomGen(6,4)}'${randomGen(12,1) - 1}"`};
Product.prototype.makeTitle = function() {return faker.lorem.sentence(randomGen(10,3))};
Product.prototype.makeReview = function() {return faker.lorem.sentences(randomGen(10,3))};
Product.prototype.makeFits = function(rating) {return rating > 3 ? true : false};
Product.prototype.makeFit_purchased = function() {return getRandomItem(fit_purchased)};
Product.prototype.makeSize_purchased = function() {return this.fits ? this.fit_purchased : this.category === 'pants' ? getRandomItem(size_purchased_pants) : getRandomItem(size_purchased)};
Product.prototype.makeSize = function() {return this.size_purchased};
Product.prototype.makeRecommends = function(rating) {return rating > 3 ? true : false};
Product.prototype.makeDate = function() {return faker.date.past(randomGen(3,0))};

var MakeProducts = () => {
  var products = [];
  for (var i = 1; i < 101; i ++) {
    var newProduct = new Product(i);
    var reviewCount = newProduct.makeReviewCount();
    newProduct.reviews = [];
    for(var j = 0; j < reviewCount; j++){
      var review = {};
      if(i < 76){
        review.body_type = newProduct.makeBody_type();
        review.height = newProduct.makeHeight().toString();
      }
      review.username = newProduct.makeUsername();
      review.location = newProduct.makeLocation();
      review.age = newProduct.makeAge();
      review.rating = newProduct.makeRating();
      review.title = newProduct.makeTitle();
      review.review = newProduct.makeReview();
      review.fits = newProduct.makeFits(review.rating);
      review.fit_purchased = newProduct.makeFit_purchased();
      review.size_purchased = newProduct.makeSize_purchased();
      review.size = newProduct.makeSize();
      review.recommends = newProduct.makeRecommends(review.rating);
      review.date = dateFormatter(newProduct.makeDate());
      newProduct.reviews.push(review);
    }
    products.push(newProduct);
  }
  return products
}


var seedDatabase = function(data) {
  ProductModel.insertMany(data, function(err, resp) {
    if(err) {console.log(`error: ${err}`)}
    else {console.log(`response: `)}
  })
}

seedDatabase(MakeProducts());