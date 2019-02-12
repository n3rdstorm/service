const connection = require('../database/index.js');
const Product = require('../database/model.js');

let read = (callback) => {
  Product.find({}, (error, data) => {
    if (error) {
      callback(error); 
    } else {
      callback(null, data);
    }
  })
}

module.exports = read;
