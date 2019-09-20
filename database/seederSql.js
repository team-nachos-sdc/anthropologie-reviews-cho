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

// var Product = function(product_id){
//   this.product_id = product_id;
// }

makeRating = function() {return randomGen(5, 1)};
makeReviewCount = function() {return randomGen(5, 1)};
makeUsername = function() {return faker.internet.userName()};
makeLocation = function() {return faker.address.city() + '; ' + faker.address.stateAbbr()};
makeAge = function() {return getRandomItem(age)};
makeBody_type = function() {return getRandomItem(body_type)};
makeHeight = function() {return `${randomGen(6,4)}'${randomGen(12,1) - 1}"`};
makeTitle = function() {return faker.lorem.sentence(randomGen(10,3))};
makeReview = function() {return faker.lorem.sentences(randomGen(7,4))};
makeFits = function(rating) {return rating > 3 ? true : false};
makeFit_purchased = function() {return getRandomItem(fit_purchased)};
makeSize_purchased = function() {
  if(this.category === 'pants') {
    return this.fits ? this.size_purchased : getRandomItem(size_purchased_pants)
  } else {
    return this.fits ? this.size_purchased : getRandomItem(size_purchased)
  }
}
makeSize = function() {
  return this.category === 'pants' ? this.fits ? this.size_purchased : getRandomItem(size_purchased_pants) : getRandomItem(size_purchased)};
makeRecommends = function(rating) {return rating > 3 ? true : false};
makeDate = function() {return faker.date.past(randomGen(3, 1))};

/* making products*/
var MakeBeddingReviews = () => {
  let bedReviews = {};
  bedReviews.category = "bedding";
  bedReviews.username = makeUsername();
  bedReviews.location = makeLocation();
  bedReviews.age = makeAge();
  bedReviews.rating = makeRating();
  bedReviews.title = makeTitle();
  bedReviews.review = makeReview();
  bedReviews.fits = makeRecommends(bedReviews.rating);
  bedReviews.size_purchased = makeSize_purchased();
  bedReviews.size = makeSize_purchased();
  bedReviews.recommends = makeRecommends(bedReviews.rating);
  bedReviews.date = dateFormatter(makeDate());
  return bedReviews;
}

var MakePantReviews = () => {
  let pantsReviews = {};
  pantsReviews.category = "pants";
  pantsReviews.body_type = makeBody_type();
  pantsReviews.height = makeBody_type();
  pantsReviews.fit_purchased = makeFit_purchased();
  pantsReviews.username = makeUsername();
  pantsReviews.location = makeLocation();
  pantsReviews.age = makeAge();
  pantsReviews.rating = makeRating();
  pantsReviews.title = makeTitle();
  pantsReviews.review = makeReview();
  pantsReviews.fits = makeRecommends(pantsReviews.rating);
  pantsReviews.size_purchased = makeSize_purchased();
  pantsReviews.size = makeSize_purchased();
  pantsReviews.recommends = makeRecommends(pantsReviews.rating);
  pantsReviews.date = dateFormatter(makeDate());
  return pantsReviews;
}

var MakeSkirtReviews = () => {
  let skirtReviews = {};
  skirtReviews.category = "skirt";
  skirtReviews.body_type = makeBody_type();
  skirtReviews.height = makeBody_type();
  skirtReviews.fit_purchased = makeFit_purchased();
  skirtReviews.username = makeUsername();
  skirtReviews.location = makeLocation();
  skirtReviews.age = makeAge();
  skirtReviews.rating = makeRating();
  skirtReviews.title = makeTitle();
  skirtReviews.review = makeReview();
  skirtReviews.fits = makeRecommends(skirtReviews.rating);
  skirtReviews.size_purchased = makeSize_purchased();
  skirtReviews.size = makeSize_purchased();
  skirtReviews.recommends = makeRecommends(skirtReviews.rating);
  skirtReviews.date = dateFormatter(makeDate());
  return skirtReviews;
}

var MakeDressReviews = () => {
  let dressesReviews = {};
  dressesReviews.category = "dresses";
  dressesReviews.body_type = makeBody_type();
  dressesReviews.height = makeBody_type();
  dressesReviews.fit_purchased = makeFit_purchased();
  dressesReviews.username = makeUsername();
  dressesReviews.location = makeLocation();
  dressesReviews.age = makeAge();
  dressesReviews.rating = makeRating();
  dressesReviews.title = makeTitle();
  dressesReviews.review = makeReview();
  dressesReviews.fits = makeRecommends(dressesReviews.rating);
  dressesReviews.size_purchased = makeSize_purchased();
  dressesReviews.size = makeSize_purchased();
  dressesReviews.recommends = makeRecommends(dressesReviews.rating);
  dressesReviews.date = dateFormatter(makeDate());
  return dressesReviews;
}

const createProd = () => {
  let prodArr = [];
  for (let j = 0; j < 10; j++){
    prodArr.push(MakePantReviews())
  }
  for (let k = 0; k < 10; k++){
    prodArr.push(MakeSkirtReviews())
  }
  for (let l = 0; l < 10; l++){
    prodArr.push(MakeDressReviews())
  }
  for (let i = 0; i < 10; i++){
    prodArr.push(MakeBeddingReviews())
  }
  return prodArr;
}

var MakeProduct = (i) => {
  let product = {};
  product.id = i;
  product.category = i > 7600000 ? 'bedding' : i > 5000000 ? 'skirt' : i > 2500000 ? 'pants' : 'dresses';
  // product.category = i > 76 ? 'bedding' : i > 50 ? 'skirt' : i > 25 ? 'pants' : 'dresses';
  return product;
}

var millions = () => {
  let arr = [];
  for (let i = 1; i < 10000001; i++){
    if (i % 100000 === 0) {console.log(i)}
    arr.push(MakeProduct(i))
  }
  return arr;
}

function toCSV(json) {
  //for making reviews comment out the first line
  // json = Object.values(json);
  var csv = "";
  var keys = (json[0] && Object.keys(json[0])) || [];
  csv += keys.join(',') + '\n';
  for (var line of json) {
    csv += keys.map(key => line[key]).join(',') + '\n';
  }
  return csv;
}

/* create write streams with drain */
// let wstream = fs.createWriteStream('productsCSV2.csv');
let wstream = fs.createWriteStream('reviewsCSV2.csv');

function dataWrites (wstream, encoding, cb) {
  wstream.write(toCSV(createProd()), encoding, cb);
        console.log("finish seeding")
}


// function dataWrites(wstream, encoding, cb) {
//   let i = 0;
//   function write() {
//     let ok = true;
//     do {
//       if (i  % 10 === 0) {console.log(i)}
//       i++;
//       if (i === 101) {
//         wstream.write(toCSV(MakeProduct(i)), encoding, cb);
//         console.log("finish seeding")
//       } else {
//         ok  = wstream.write(toCSV(MakeProduct(i)), encoding);
//       }
//     } while (i < 101  && ok);
//     if ( i < 101) {
//       wstream.once('drain', write)
//     }
//   } 
//   write()
// };

dataWrites(wstream, 'utf8', () => {
  wstream.end()
});

   
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
