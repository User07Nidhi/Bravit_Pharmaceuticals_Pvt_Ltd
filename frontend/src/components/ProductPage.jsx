import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const productDetails = {
  'ketobasu': {
    name: 'Keto Basu',
    description: 'Keto Basu is a premium medicine for digestion problems.',
    price: '₹250',
    image: '/images/ketobasu.jpg'
  },
  'dsr': {
    name: 'DSR',
    description: 'DSR is used to treat acidity and gas trouble.',
    price: '₹180',
    image: '/images/dsr.jpg'
  },
  'dsrultra': {
    name: 'DSR Ultra',
    description: 'DSR Ultra provides fast relief from acidity.',
    price: '₹200',
    image: '/images/dsrultra.jpg'
  },
  'proteinpowder': {
    name: 'Protein Powder',
    description: 'High protein supplement to boost your energy.',
    price: '₹600',
    image: '/images/proteinpowder.jpg'
  },
  'omegacapsules': {
    name: 'Omega 3 Capsules',
    description: 'Omega 3 Capsules improve heart health and brain functions.',
    price: '₹550',
    image: '/images/omegacapsules.jpg'
  },
  'vitamintablets': {
    name: 'Vitamin C Tablets',
    description: 'Boost your immunity with Vitamin C Tablets.',
    price: '₹300',
    image: '/images/vitamintablets.jpg'
  }
};

const ProductPage = () => {
  const { productName } = useParams();
  const product = productDetails[productName.toLowerCase()];

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <h3>Price: {product.price}</h3>
      <button className="buy-button">Buy Now</button>
      <button className="back-button" onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default ProductPage;
