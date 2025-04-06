// models/Cart.js

const mongoose = require('mongoose');

// Subdocument schema for items in the cart
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity can not be less than 1.']
  }
});

// Main cart schema
const cartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Each user has one cart
  },
  items: [cartItemSchema]
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
