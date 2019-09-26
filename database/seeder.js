const ProductModel = require('./index.js');
const faker = require('faker');
const fs = require('fs');

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
    month = month_names[d.getMonth()],
    day = '' + d.getDate(),
    year = d.getFullYear();
  
  if(day.length < 2) { day = '0' + day };
  return [day, month, year].join('-');
}

var Product = function(product_id){
  this.product_id = product_id;
}

Product.prototype.makeRating = function() {return randomGen(5, 1)};
Product.prototype.makeReviewCount = function() {return randomGen(4, 0)};
Product.prototype.makeUsername = function() {return faker.internet.userName()};
Product.prototype.makeLocation = function() {return faker.address.city() + ', ' + faker.address.stateAbbr()};
Product.prototype.makeAge = function() {return getRandomItem(age)};
Product.prototype.makeBody_type = function() {return getRandomItem(body_type)};
Product.prototype.makeHeight = function() {return `${randomGen(6,4)}'${randomGen(12,1) - 1}"`};
Product.prototype.makeTitle = function() {return faker.lorem.sentence(randomGen(3,1))};
Product.prototype.makeReview = function() {return faker.lorem.sentences(randomGen(3,1))};
Product.prototype.makeFits = function(rating) {return rating > 3 ? true : false};
Product.prototype.makeFit_purchased = function() {return getRandomItem(fit_purchased)};
Product.prototype.makeSize_purchased = function() {
  if(this.category === 'pants') {
    return this.fits ? this.size_purchased : getRandomItem(size_purchased_pants)
  } else {
    return this.fits ? this.size_purchased : getRandomItem(size_purchased)
  }
}
Product.prototype.makeSize = function() {
  return this.category === 'pants' ? this.fits ? this.size_purchased : getRandomItem(size_purchased_pants) : getRandomItem(size_purchased)};
Product.prototype.makeRecommends = function(rating) {return rating > 3 ? true : false};
Product.prototype.makeDate = function() {return faker.date.past(randomGen(3, 1))};

/* original function on making products*/
// var MakeProducts = () => {
//   var products = [];
//   for (var i = 1; i < 101; i ++) {
//     if(i % 10 === 0) {console.log( i )}
//     var newProduct = new Product(i);
//     var reviewCount = newProduct.makeReviewCount();
//     newProduct.reviews = [];
//     for(var j = 0; j < reviewCount; j++){
//       var review = {};
//       if(i < 76){
//         review.body_type = newProduct.makeBody_type();
//         review.height = newProduct.makeHeight().toString();
//         review.fit_purchased = newProduct.makeFit_purchased();
//       }
//       review.category = i >= 76 ? 'bedding' : i > 50 ? 'skirt' : i > 25 ? 'pants' : 'dresses';
//       review.username = newProduct.makeUsername();
//       review.location = newProduct.makeLocation();
//       review.age = newProduct.makeAge();
//       review.rating = newProduct.makeRating();
//       review.title = newProduct.makeTitle();
//       review.review = newProduct.makeReview();
//       review.fits = newProduct.makeFits(review.rating);
//       review.size_purchased = newProduct.makeSize_purchased();
//       review.size = (function() {  
//         if(this.category === 'pants') {
//           return this.fits ? this.size_purchased : getRandomItem(size_purchased_pants)
//         } else {
//           return this.fits ? this.size_purchased : getRandomItem(size_purchased)
//         }
//       })();
//       review.recommends = newProduct.makeRecommends(review.rating);
//       review.date = dateFormatter(newProduct.makeDate());
//       newProduct.reviews.push(review);
//     }
//     products.push(newProduct);
//   }
//   return products
// }

/* making products*/
var MakeProduct = (i) => {
  var newProduct = new Product(i);
    var reviewCount = newProduct.makeReviewCount();
    newProduct.reviews = [];
    for(var j = 0; j < reviewCount; j++){
      var review = {};
      if(i < 7600000){
        review.body_type = newProduct.makeBody_type();
        review.height = newProduct.makeHeight().toString();
        review.fit_purchased = newProduct.makeFit_purchased();
      }
      review.category = i >= 7600000 ? 'bedding' : i > 5000000 ? 'skirt' : i > 2500000 ? 'pants' : 'dresses';
      review.username = newProduct.makeUsername();
      review.location = newProduct.makeLocation();
      review.age = newProduct.makeAge();
      review.rating = newProduct.makeRating();
      review.title = newProduct.makeTitle();
      review.review = newProduct.makeReview();
      review.fits = newProduct.makeFits(review.rating);
      review.size_purchased = newProduct.makeSize_purchased();
      review.size = (function() {  
        if(this.category === 'pants') {
          return this.fits ? this.size_purchased : getRandomItem(size_purchased_pants)
        } else {
          return this.fits ? this.size_purchased : getRandomItem(size_purchased)
        }
      })();
      review.recommends = newProduct.makeRecommends(review.rating);
      review.date = dateFormatter(newProduct.makeDate());
      newProduct.reviews.push(review);
    }
    return newProduct;
}

/* create write streams with drain */
let wstream = fs.createWriteStream('seedData2.json');

function dataWrites(wstream, encoding, cb) {
  let i = 0;
  function write() {
    let ok = true;
    do {
      if (i  % 100000 === 0) {console.log(i)}
      i++;
      if (i === 10000001) {
        wstream.write(JSON.stringify(MakeProduct(i)), encoding, cb);
        console.log("finish seeding")
      } else {
        ok  = wstream.write(JSON.stringify(MakeProduct(i)), encoding);
      }
    } while (i < 10000001  && ok);
    if ( i < 10000001) {
      wstream.once('drain', write)
    }
  } 
  write()
};

dataWrites(wstream, 'utf8', () => {
  wstream.end()
});


// var reader = fs.createReadStream('seedData.json');
// var write = fs.createWriteStream('seedCSV.csv');
// reader.pipe(jsonexport()).pipe(write);

   
/* Seeding database functions */
/* put in through terminal */
  // mongoimport --db seed --collection reviews --file seedcsv.json --batchSize 1 

//   var seedDatabase = function(data) {
//   ProductModel.insertMany(data, function(err, resp) {
//     if(err) {console.log(`error: ${err}`)}
//     else {console.log(`response: db seeded`)}
//   })
// }

// seedDatabase(MakeProducts());
