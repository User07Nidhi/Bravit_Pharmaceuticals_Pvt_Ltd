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
          className={`tablinks ${activeTab === "Bravit-M" ? "active" : ""}`}
          onClick={() => handleTabClick("Bravit-M")}
        >
          Bravit-M
        </button>
        <button
          className={`tablinks ${activeTab === "Bravycare 6" ? "active" : ""}`}
          onClick={() => handleTabClick("Bravycare 6")}
        >
          Bravycare 6
        </button>
        <button
          className={`tablinks ${activeTab === "Bravycare 20" ? "active" : ""}`}
          onClick={() => handleTabClick("Bravycare 20")}
        >
          Bravycare 20
        </button>
        <button
          className={`tablinks ${activeTab === "Popbite" ? "active" : ""}`}
          onClick={() => handleTabClick("Popbite")}
        >
          Popbite
        </button>
          <button
            className={`tablinks ${activeTab === "Riprotein Chocolate" ? "active" : ""
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
        id="Bravit-M"
        className="tabcontent"
        style={{ display: activeTab === "Bravit-M" ? "block" : "none" }}
      >
        <h3>Bravit-M</h3>
        <p>Bravit-M</p>
      </div>
      <div
        id="Bravycare 6"
        className="tabcontent"
        style={{ display: activeTab === "Bravycare 6" ? "block" : "none" }}
      >
        <h3>Bravycare 6</h3>
        <p>Bravycare 6</p>
      </div>
      <div
        id="Bravycare 20"
        className="tabcontent"
        style={{ display: activeTab === "Bravycare 20" ? "block" : "none" }}
      >
        <h3>Bravycare 20</h3>
        <p>Bravycare 20</p>
      </div>
      <div
        id="Popbite"
        className="tabcontent"
        style={{
          display: activeTab === "Popbite" ? "block" : "none",
        }}
      >
        <h3>Popbite</h3>
        <p>Popbite</p>
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
