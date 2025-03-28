import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './EcommercePage.css';

const EcommercePage = ({ selectedCategory }) => {
  const params = useParams();
  const categoryFromURL = params.category || '';
  const categoryName = selectedCategory || categoryFromURL;

  const formattedKey = categoryName.toLowerCase().replace(/\s/g, '');

  const products = {
    pharmaceuticals: ['Keto Basu', 'Bravizole DSR', 'Bravizole - R DSR'],
    nutraceuticals: ['Bravit Jr', 'Bravit-L', 'Bravit-M', 'Riprotin', 'Riprotin MusclePro'],
    cosmetic: ['Face Cream', 'Hair Serum', 'Lip Balm'],
    herbal: ['Aloe Vera Gel', 'Neem Capsules', 'Tulsi Drops'],
    healthandhygiene: ['Hand Sanitizer', 'Toothpaste', 'Shampoo'],
    foodandsupplement: ['Protein Bar', 'Multivitamin Tablets', 'Energy Drink']
  };

  const productList = products[formattedKey];

  if (!productList) {
    return <h2>No products found for this category.</h2>;
  }

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
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
