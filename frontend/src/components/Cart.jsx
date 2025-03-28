import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CartPage.css';

const CartPage = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items for the user
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auth/${userId}`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const removeFromCart = async (productId) => {
    try {
      await axios.post('http://localhost:5000/api/auth/remove', {
        userId,
        productId,
      });
      setCartItems(cartItems.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      await axios.post('http://localhost:5000/api/auth/update', {
        userId,
        productId,
        quantity,
      });
      setCartItems(
        cartItems.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.productId} className="cart-item">
            <h3>{item.product.name}</h3>
            <p>Price: ${item.product.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}>
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(item.productId)}>Remove</button>
          </div>
        ))}
      </div>
      <h2>Total: ${calculateTotal().toFixed(2)}</h2>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
