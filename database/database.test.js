const {getProductDetails} = require('../database/index');

describe('Testing database', () => {

// Test returned item from DB
test('getProductDetails should return a product ID of 1', () => {
  function callback(data) {
    expect(data.id).toBe(1);
  }
  getProductDetails(1, callback)
});

test('getProductDetails data.id should return an number as its type', done => {
  function callback(data) {
    expect(typeof data.id).toBe('number');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.productTitle should return an string as its type', done => {
  function callback(data) {
    expect(typeof data.productTitle).toBe('string');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.stars should return an number as its type', done => {
  function callback(data) {
    expect(typeof data.stars).toBe('number');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.condition should return an string as its type', done => {
  function callback(data) {
    expect(typeof data.condition).toBe('string');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.price should return an string as its type', done => {
  function callback(data) {
    expect(typeof data.price).toBe('string');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.limitRemaining should return an number as its type', done => {
  function callback(data) {
    expect(typeof data.limitRemaining).toBe('number');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.productNumber should return an srting as its type ', done => {
  function callback(data) {
    expect(typeof data.productNumber).toBe('string');
    done();
  }
  getProductDetails(1, callback);
});

test('getProductDetails data.bidding should return an number as its type', done => {
  function callback(data) {
    expect(typeof data.bidding).toBe('number');
    done();
  }
  getProductDetails(1, callback);
});

})