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
const addToCart = async (req, res, next) => {
  try {
    const { email, productId, quantity, name, price } = req.body;

    if (!email) {
      return next(new ValidationError('Email is required for authentication.'));
    }

    let cart = await Cart.findOne({ email });

    if (!cart) {
      cart = new Cart({ email, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, name, price });
    }

    await cart.save();
    res.status(200).json(cart.toObject()); // Convert Mongoose doc to plain object
  } catch (error) {
    next(error);
  }
};

// View cart items
const viewCart = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return next(new ValidationError('Email is required for authentication.'));
    }

    const cart = await Cart.findOne({ email }).lean(); // Use lean() to avoid circular references
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
    res.status(200).json(cart.toObject()); // Convert Mongoose doc to plain object
  } catch (error) {
    next(error);
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
