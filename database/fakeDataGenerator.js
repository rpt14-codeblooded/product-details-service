const faker = require('faker');

var dataGenerator = function() {
  var productDetails = [];

  for (var i = 1; i <= 100; i++) {
    productDetails.push({
      id:i,
      productTitle: faker.lorem.words(5),
      stars: faker.random.number(5),
      condition: faker.random.word(),
      price: faker.commerce.price(),
      limitRemaining: faker.random.number(100),
      productNumber: faker.random.alphaNumeric(15),
      bidding: faker.random.number(),
      latestBid: faker.date.recent(),

    });
  }
  return productDetails;
}
const data = dataGenerator();
module.exports.data = data;