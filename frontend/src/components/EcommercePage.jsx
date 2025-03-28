import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './EcommercePage.css';

const EcommercePage = ({ selectedCategory }) => {
  const params = useParams();
  const categoryFromURL = params.category || '';
  const categoryName = selectedCategory || categoryFromURL;

  const formattedKey = categoryName.toLowerCase().replace(/\s/g, '');

  // Define products with fixed IDs
  const products = {
    pharmaceuticals: [
      { id: 'p1', name: 'Keto Basu', price: 10.99 },
      { id: 'p2', name: 'DSR', price: 12.49 },
      { id: 'p3', name: 'DSR Ultra', price: 14.99 },
    ],
    nutraceuticals: [
      { id: 'n1', name: 'Protein Powder', price: 20.99 },
      { id: 'n2', name: 'Omega 3 Capsules', price: 15.49 },
      { id: 'n3', name: 'Vitamin C Tablets', price: 8.99 },
    ],
    cosmetic: [
      { id: 'c1', name: 'Face Cream', price: 5.99 },
      { id: 'c2', name: 'Hair Serum', price: 7.49 },
      { id: 'c3', name: 'Lip Balm', price: 3.99 },
    ],
    herbal: [
      { id: 'h1', name: 'Aloe Vera Gel', price: 6.99 },
      { id: 'h2', name: 'Neem Capsules', price: 9.49 },
      { id: 'h3', name: 'Tulsi Drops', price: 4.99 },
    ],
    healthandhygiene: [
      { id: 'hh1', name: 'Hand Sanitizer', price: 2.99 },
      { id: 'hh2', name: 'Toothpaste', price: 3.49 },
      { id: 'hh3', name: 'Shampoo', price: 5.99 },
    ],
    foodandsupplement: [
      { id: 'fs1', name: 'Protein Bar', price: 1.99 },
      { id: 'fs2', name: 'Multivitamin Tablets', price: 10.49 },
      { id: 'fs3', name: 'Energy Drink', price: 2.49 },
    ],
  };

  const productList = products[formattedKey];

  if (!productList) {
    return <h2>No products found for this category.</h2>;
  }

  // Function to get user email
  const getUserEmail = () => {
    return localStorage.getItem('userEmail'); // Retrieve stored user email
  };

  // Function to add product to cart
  const addToCart = async (product) => {
    const email = getUserEmail(); // Get user email

    if (!email) {
      alert('You need to log in first!');
      return;
    }

    const quantity = 1; // Default quantity

    try {
      console.log("Sending request to backend:", {
        productId: product.id,
        quantity,
        name: product.name,
        price: product.price,
        email,
      });

      const response = await axios.post(
        'http://localhost:5000/api/auth/add',
        {
          productId: product.id,
          quantity,
          name: product.name,
          price: product.price,
          email,
        }
      );

      console.log('✅ Product added to cart:', response.data);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error('❌ Error adding product to cart:', error.response ? error.response.data : error.message);
      alert('Failed to add product to cart. Check console for details.');
    }
  };

  return (
    <div className="ecommerce-container">
      <h1>{categoryName} Products</h1>
      <div className="ecommerce-products">
        {productList.map((product) => (
          <div key={product.id} className="ecommerce-product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.name.toLowerCase().replace(/\s/g, '')}`}>
              <button>View {product.name}</button>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
