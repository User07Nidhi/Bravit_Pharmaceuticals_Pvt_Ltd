import React from 'react';
import { Link } from 'react-router-dom';
import './Products-and-EcommercePage.css';

const Products = ({ setSelectedCategory }) => {
  const categories = [
    { name: 'Pharmaceuticals', img: '/image5.jpg' },
    { name: 'Nutraceuticals', img: '/Bravit-L.jpeg' },
    { name: 'Cosmetic', img: '/Bravycare-6.png' },
    { name: 'Herbal', img: '/Mango.png' },
    { name: 'Health and Hygiene', img: '/Bravycare-6.png' },
    { name: 'Food and Supplement', img: '/Mango.png' }
  ];

  const handleClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {categories.map((category, index) => (
          <div key={index} className="product-card">
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
            <Link to={`/products/${category.name.toLowerCase()}`} onClick={() => handleClick(category.name)}>
              <button>View {category.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
