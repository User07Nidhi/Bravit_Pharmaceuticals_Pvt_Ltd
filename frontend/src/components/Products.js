import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [activeTab, setActiveTab] = useState("Bravit-L");

  const handleTabClick = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div>
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "Bravit-L" ? "active" : ""}`}
          onClick={() => handleTabClick("Bravit-L")}
        >
          Bravit-L
        </button>
        <button
          className={`tablinks ${activeTab === "Paris" ? "active" : ""}`}
          onClick={() => handleTabClick("Paris")}
        >
          Paris
        </button>
        <button
          className={`tablinks ${activeTab === "Tokyo" ? "active" : ""}`}
          onClick={() => handleTabClick("Tokyo")}
        >
          Tokyo
        </button>
        <button
          className={`tablinks ${activeTab === "London" ? "active" : ""}`}
          onClick={() => handleTabClick("London")}
        >
          London
        </button>
        <button
          className={`tablinks ${
            activeTab === "Riprotein Chocolate" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Riprotein Chocolate")}
        >
          Riprotein Chocolate
        </button>
        <button
          className={`tablinks ${activeTab === "Riprotein Mango" ? "active" : ""}`}
          onClick={() => handleTabClick("Riprotein Mango")}
        >
          Riprotein Mango
        </button>
      </div>

      <div
        id="Bravit-L"
        className="tabcontent"
        style={{ display: activeTab === "Bravit-L" ? "block" : "none" }}
      >
        <h3>Bravit-L</h3>
        <p>Lycopene</p>
      </div>
      <div
        id="Paris"
        className="tabcontent"
        style={{ display: activeTab === "Paris" ? "block" : "none" }}
      >
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
      <div
        id="Tokyo"
        className="tabcontent"
        style={{ display: activeTab === "Tokyo" ? "block" : "none" }}
      >
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      <div
        id="London"
        className="tabcontent"
        style={{ display: activeTab === "London" ? "block" : "none" }}
      >
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      <div
        id="Riprotein Chocolate"
        className="tabcontent"
        style={{
          display: activeTab === "Riprotein Chocolate" ? "block" : "none",
        }}
      >
        <h3>Riprotein Chocolate</h3>
        <p>Riprotein Chocolate</p>
      </div>
      <div
        id="Riprotein Mango"
        className="tabcontent"
        style={{ display: activeTab === "Riprotein Mango" ? "block" : "none" }}
      >
        <h3>Riprotein Mango</h3>
        <p>Riprotein Mango</p>
      </div>
    </div>
  );
};

export default Products;
