import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./CartPage.css"; // Reusing CartPage.css for styling

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const userEmail = localStorage.getItem("userEmail");

  // ✅ Using useCallback to prevent useEffect warning
  const fetchCart = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${userEmail}`);
      const items = res.data.items || [];
      setCartItems(items);
      calculateTotal(items);
    } catch (err) {
      console.error("Error fetching cart:", err.message);
    }
  }, [userEmail]);

  useEffect(() => {
    if (userEmail) {
      fetchCart();
    }
  }, [userEmail, fetchCart]);

  const removeFromCart = async (productId) => {
    try {
      await axios.post("http://localhost:5000/api/auth/remove", {
        email: userEmail,
        productId,
      });
      const updatedItems = cartItems.filter(item => item.productId !== productId);
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
    } catch (err) {
      console.error("Error removing item:", err.message);
    }
  };

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(sum);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.productId}>
            <img
              src={`https://via.placeholder.com/100?text=${item.name}`}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="cart-item-actions">
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.productId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="cart-total">
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

export default Cart;
