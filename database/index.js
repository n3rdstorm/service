const mongoose = require('mongoose');
const mongoConnection = require('../config.js');
mongoose.connect(mongoConnection, err => {
  if (err) {
    console.log(err);
  }
});
const db = mongoose.connection;

module.exports = db;
