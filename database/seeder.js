var seeder = () => {
  var product, category, reviewCount, username, location, age, body_type, height, rating, title, review, fits, fit_purchased,
    size_purchased, size, recommends, date;

  for (var product_id = 1; product_id < 101; product_id ++) { //i is id
   category = product_id < 26 && product_id > 0 ? 'dress' : product_id > 25 && product_id < 51 ? 'pants' : product_id > 50 && product_id < 76 ? 'skirt' : 'bedding';
  }
  product = {
    product_id: product_id, 
    product_category: category,
  }
  product.rating = randomGen(5, 1);
  product.reviewCount = randomGen(10, 5);

}

var reviewGenerator = () => {

}

var randomGen = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}