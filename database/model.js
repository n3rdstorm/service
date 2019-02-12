const mongoose = require('mongoose');

let productSchema = mongoose.Schema ({
  product_id: Number,
  brand: String,
  product_name: String,
  price: Number,
  description: String,
  size: Array,
  color: Array,
  images: Array,
  quantity: Number
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;
