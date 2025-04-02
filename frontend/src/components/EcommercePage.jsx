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
    pharmaceuticals: ['Keto Basu', 'DSR', 'DSR Ultra'],
    nutraceuticals: ['Protein Powder', 'Omega 3 Capsules', 'Vitamin C Tablets'],
    cosmetic: ['Face Cream', 'Hair Serum', 'Lip Balm'],
    herbal: ['Aloe Vera Gel', 'Neem Capsules', 'Tulsi Drops'],
    healthandhygiene: ['Hand Sanitizer', 'Toothpaste', 'Shampoo'],
    foodandsupplement: ['Protein Bar', 'Multivitamin Tablets', 'Energy Drink']
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
        {productList.map((product, index) => (
          <div key={index} className="ecommerce-product-card">
            <h3>{product}</h3>
            <p>Product Description for {product}</p>
            <Link to={`/product/${product.toLowerCase().replace(/\s/g, '')}`}>
              <button>View {product}</button>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
