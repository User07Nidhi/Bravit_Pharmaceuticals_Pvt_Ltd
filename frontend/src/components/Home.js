import React, { useState } from "react";
import "./Home.css";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-container">
      <div className="gallery-wrap">
        <button className="gallery-btn left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="gallery">
          <img
            src={images[currentIndex]}
            alt={`Bravit img ${currentIndex + 1}`}
          />
        </div>
        <button className="gallery-btn right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
      <div>
        <h1 className="home-title-highlight">Bravit Pharmaceuticals Pvt. Ltd.</h1>
            <p className="home-text">
                Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat (India) based company dealing with nutraceutical products, trading, exporting, importing, and supplying processed food, food supplements, and pharmaceutical products.
            </p>
            <p className="home-text">
                We assure longer and closer working relationships with our clients and suppliers, not only providing immediate and reliable services but also continually exceeding expectations and goals.
            </p>
            <p className="home-text">
                We integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to industries seeking new markets. We look forward to welcoming you to our company and working to develop and enhance your business with us.
            </p>
      </div>
    </div>
  );
};

export default Home;
