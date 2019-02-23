const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/products');
mongoose.connect('mongodb+srv://shelly:shelly@cluster0-6ycdz.mongodb.net/n3rdstorm?retryWrites=true', err => {
  if (err) {
    console.log(err);
  }
});
const db = mongoose.connection;

module.exports = db;
