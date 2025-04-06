import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  quantity: Number,
});

const cartSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    items: [itemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
