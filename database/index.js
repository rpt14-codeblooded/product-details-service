const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productDetails', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.err(err);
  }
  console.log('Connected to DB')
});

const dbConnect = mongoose.connection;

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


let saveProductDetails = (productDetailsArray) => {
  ProductDeets.create(productDetailsArray, (err, details) => {
    if (err) {
      console.error(err)
    }
    console.log('Details saved to Database');
  })
}
let deleteDB = () => {
  dbConnect.dropDatabase();
}

// This function is just to return all data from DB to display on UI. Future refactor for getting only items with specific ID
let getAllProductDetails = (cb) => {
  ProductDeets.find({}).exec()
  .then((results) => {
    cb(results);
  })
}

module.exports.getAllProductDetails = getAllProductDetails;
module.exports.ProductDeets = ProductDeets;
module.exports.saveProductDetails = saveProductDetails;
module.exports.deleteDB = deleteDB;