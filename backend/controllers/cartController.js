const Cart = require('../models/Cart');

// Custom Error Classes
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DatabaseError';
    this.statusCode = 500;
  }
}

// Add item to cart
// POST /api/cart/add
const addToCart = async (req, res) => {
  const { email, productId, name, price, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ email });

    if (!cart) {
      // Create new cart if it doesn't exist
      cart = new Cart({
        email,
        items: [{ productId, name, price, quantity }]
      });
    } else {
      // Add to existing cart
      cart.items.push({ productId, name, price, quantity });
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart", error: err.message });
  }
};


// View cart items
const viewCart = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return next(new ValidationError('Email is required for authentication.'));
    }

    const cart = await Cart.findOne({ email }).lean();
    if (!cart) {
      return next(new NotFoundError('Cart not found.'));
    }

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

// Remove item from cart
const removeFromCart = async (req, res, next) => {
  try {
    const { email, productId } = req.body;

    if (!email) {
      return next(new ValidationError('Email is required for authentication.'));
    }

    const cart = await Cart.findOne({ email });

    if (!cart) {
      return next(new NotFoundError('Cart not found.'));
    }

    const initialItemCount = cart.items.length;
    cart.items = cart.items.filter(item => item.productId !== productId);

    if (cart.items.length === initialItemCount) {
      return next(new NotFoundError('Product not found in cart.'));
    }

    await cart.save();
    res.status(200).json(cart.toObject());
  } catch (error) {
    next(error);
  }
};

// GET /api/cart/:email
const getCartItems = async (req, res) => {
  try {
    const cart = await Cart.findOne({ email: req.params.email });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart.items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

// Express error-handling middleware
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.name, message: err.message });
};

module.exports = { addToCart, viewCart, removeFromCart, errorHandler };
