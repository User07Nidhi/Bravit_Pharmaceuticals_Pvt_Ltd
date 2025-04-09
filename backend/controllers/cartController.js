const appSchema = require('../models/app.js');

// Add to Cart Controller with validation
const addToCart = async (req, res) => {
  try {
    const { productId, email, ...rest } = req.body;

    // Validate productId
    if (!productId || typeof productId !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid or missing productId' });
    }

    // Validate email
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid or missing email' });
    }

    // Optional: Check for duplicate productId
    const existingProduct = await appSchema.findOne({ productId, email });
    if (existingProduct) {
      return res.status(409).json({ success: false, message: 'Product already added for this user' });
    }

    // Create and save to DB
    const newCartItem = new appSchema({ productId, email, ...rest });
    await newCartItem.save();

    res.status(201).json({ success: true, message: 'Product added to cart successfully', data: newCartItem });
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  addToCart,
  // leave other exports unchanged
  viewCart,
  removeFromCart,
};
