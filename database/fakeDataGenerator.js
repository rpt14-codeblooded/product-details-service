const faker = require('faker');

module.exports = function() {
  var productDetails = [];

  for (var i = 1; i <= 100; i++) {
    productDetails.push({
      id:i,
      productTitle: faker.lorem.words(),
      stars: faker.random.number(),
      condition: faker.random.word(),
      price: faker.commerce.price(),
      limitRemaining: faker.random.number(),
      productNumber: faker.random.alphaNumeric(),
      bidding: faker.random.number(),
      latestBid: faker.date.recent(),

    });
  }
  return {
    productDetails: productDetails
  };
}
