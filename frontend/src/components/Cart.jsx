import React, { useState, useEffect, useCallback } from 'react';

const Cart = ({ userEmail }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState({
    productId: '',
    name: '',
    price: 0,
    quantity: 1,
  });

  // Fetch Cart (wrapped in useCallback)
  const fetchCart = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/userId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();
      setCartItems(data.items || []);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    } finally {
      setLoading(false);
    }
  }, [userEmail]);

  // Add Item
  const addToCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newItem, email: userEmail }),
      });

      const data = await response.json();
      setCartItems(data.items || []);
      setNewItem({ productId: '', name: '', price: 0, quantity: 1 });
    } catch (err) {
      console.error('Add to cart failed:', err);
    }
  };

  // Remove Item
  const removeFromCart = async (productId) => {
    try {
      const response = await fetch('http://localhost:5000/api/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email: userEmail }),
      });

      const data = await response.json();
      setCartItems(data.items || []);
    } catch (err) {
      console.error('Remove failed:', err);
    }
  };

  // Load cart on email change
  useEffect(() => {
    if (userEmail) fetchCart();
  }, [userEmail, fetchCart]);  

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Cart for {userEmail}</h2>

      <h4>Add New Item:</h4>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Product ID"
          value={newItem.productId}
          onChange={(e) => setNewItem({ ...newItem, productId: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
          style={{ marginRight: '10px' }}
        />
        <button onClick={addToCart}>Add</button>
      </div>

      <h4>Your Items:</h4>
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong> — ₹{item.price} × {item.quantity}
              <button
                onClick={() => removeFromCart(item.productId)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
