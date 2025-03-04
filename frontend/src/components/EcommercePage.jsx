import React from 'react';
import { Link } from 'react-router-dom';
import './EcommercePage.css';

const EcommercePage = ({ selectedCategory }) => {
  const products = {
    pharmaceuticals: ['Keto Basu', 'DSR', 'DSR Ultra'],
    nutraceuticals: ['Protein Powder', 'Omega 3 Capsules', 'Vitamin C Tablets'],
    cosmetic: ['Face Cream', 'Hair Serum', 'Lip Balm'],
    herbal: ['Aloe Vera Gel', 'Neem Capsules', 'Tulsi Drops'],
    healthandhygiene: ['Hand Sanitizer', 'Toothpaste', 'Shampoo'],
    foodandsupplement: ['Protein Bar', 'Multivitamin Tablets', 'Energy Drink']
  };

  return (
    <div className="ecommerce-container">
      <h1>{selectedCategory} Products</h1>
      <div className="ecommerce-products">
        {products[selectedCategory.toLowerCase().replace(/\s/g, '')]?.map((product, index) => (
          <div key={index} className="ecommerce-product-card">
            <h3>{product}</h3>
            <p>Product Description for {product}</p>
            <Link to={`/product/${product.toLowerCase().replace(/\s/g, '-')}`}>
              <button>View {product}</button>
            </Link>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
