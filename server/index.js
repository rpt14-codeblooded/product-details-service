const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const getAllProductDetails = require('../database/index').getAllProductDetails;


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.listen(3002, () => {
  console.log(`listening on port 3002`);
})

app.get('/product-details', (req, res) => {
  getAllProductDetails((results) => {
    res.send(results);
  })
})