const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true }, // Keeping productId as a String (UUID format)
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const cartSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true }, // Ensuring unique email per cart
    items: [cartItemSchema], // Embedding cart items directly
  },
  { timestamps: true }
);

// Remove circular structure by using .lean() when fetching data

module.exports = mongoose.model('Cart', cartSchema);
