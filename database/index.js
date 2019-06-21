const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productDetails', () => {
  if (err) {
    console.err(err);
  }
  console.log('Connected to DB')
});

let productDetailsSchema = mongoose.Schema({
  id: Number,
  productTitle: String,
  stars: Number,
  condition: String,
  price: String,
  limitRemaining: Number,
  productNumber: String,
  bidding: Number,
  latestBid: Date
});

let ProductDeets = mongoose.model('productdetails', productDetailsSchema);

// This function is just to return all data from DB to display on UI. Future refactor for getting only items with specific ID
let getAllProductDetails = () => {
  return ProductDeets.find({}).exec();
}

module.exports.getAllProductDetails = getAllProductDetails;