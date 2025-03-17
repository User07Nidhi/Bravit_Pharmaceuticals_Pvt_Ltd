import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products-and-EcommercePage.css';

const Products = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Pharmaceuticals', img: '/image5.jpg' },
    { name: 'Nutraceuticals', img: '/Bravit-L.jpeg' },
    { name: 'Cosmetic', img: '/Bravycare-6.png' },
    { name: 'Herbal', img: '/Mango.png' },
    { name: 'Health and Hygiene', img: '/Bravycare-6.png' },
    { name: 'Food and Supplement', img: '/Mango.png' }
  ];

  const handleClick = (category) => {
    if (setSelectedCategory) {
      setSelectedCategory(category.toLowerCase());
    }
    navigate(`/products${category.toLowerCase()}`);
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div>
        {categories.map((category, index) => (
          <div key={index} className="product-card">
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
            <button onClick={() => handleClick(category.name)}>View {category.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
