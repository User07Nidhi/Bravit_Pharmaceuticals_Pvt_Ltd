// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  // Add other relevant fields
}, { collection: "Product" });

module.exports = mongoose.model('Product', productSchema);
