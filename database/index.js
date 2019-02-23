const mongoose = require('mongoose');
const mongoConnection = require('../config.js');
// mongoose.connect('mongodb://127.0.0.1:27017/products');
mongoose.connect(mongoConnection, err => {
  if (err) {
    console.log(err);
  }
});
const db = mongoose.connection;

module.exports = db;
