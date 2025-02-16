import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [activeTab, setActiveTab] = useState("Bravit-L");

  const handleTabClick = (productName) => {
    setActiveTab(productName);
  };

  // Data for products
  const productData = {
    "Bravit-L": {
      title: "Bravit-L",
      description: "A high-quality lycopene supplement to boost your health.",
      image: "/Bravit-L.jpeg", 
    },
    "Bravit-M": {
      title: "Bravit-M",
      description: "A premium multivitamin for everyday wellness.",
      image: "/Bravit-M.jpg", 
    },
    "Bravycare 6": {
      title: "Bravycare 6",
      description: "A specialized care product for your daily needs.",
      image: "/Bravycare-6.png", 
    },
    "Bravycare 20": {
      title: "Bravycare 20",
      description: "Enhanced formula for better health and vitality.",
      image: "/Bravycare-20.png", 
    },
    Popbite: {
      title: "Popbite",
      description: "What is Fox Nuts (Makhana)? Fox Nuts (Makhana) is a flowering plant, Classified in the Water Lily family, having Biological Name as Eyryale Ferox, known as Fox Nuts, Gorgon Pop, Tal Makhana, Phool Makhana, and Lotus Seeds.",
      image: "/Popbite.jpeg", 
    },
    "Riprotein Chocolate": {
      title: "Riprotein Chocolate",
      description: "Rich chocolate-flavored protein for fitness enthusiasts.",
      image: "/Riprotein-Chocolate.png",
    },
    "Riprotein Mango": {
      title: "Riprotein Mango",
      description: "Tropical mango protein for a refreshing experience.",
      image: "/Mango.png", 
    },
  };

  return (
    <div>
      <div className="tab">
        {Object.keys(productData).map((product) => (
          <button
            key={product}
            className={`tablinks ${activeTab === product ? "active" : ""}`}
            onClick={() => handleTabClick(product)}
          >
            {productData[product].title}
          </button>
        ))}
      </div>

      <div className="tabcontent">
        <h3>{productData[activeTab].title}</h3>
        <img
          src={productData[activeTab].image}
          alt={productData[activeTab].title}
          style={{ width: "200px", height: "200px", margin: "20px" }}
        />
        <p>{productData[activeTab].description}</p>
      </div>
    </div>
  );
};

export default Products;
