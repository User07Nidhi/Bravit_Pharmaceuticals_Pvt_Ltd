import React, { useRef } from 'react';
import './Home.css';

const Home = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            {/* Image Carousel */}
            <div className="carousel-container">
                <button className="carousel-button left" onClick={scrollLeft}>
                    &#8249;
                </button>
                <div className="carousel" ref={sliderRef}>
                    <img src="image1.jpg" alt="Bravit Office" className="carousel-image" />
                    <img src="image2.jpg" alt="Bravit Products" className="carousel-image" />
                    <img src="image3.jpg" alt="Bravit Team" className="carousel-image" />
                    <img src="image4.jpg" alt="Bravit Warehouse" className="carousel-image" />
                    
                </div>
                <button className="carousel-button right" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>

            {/* Main Content */}
            <h1 className="home-title">Welcome to</h1>
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

            <h2 className="section-heading">Our Endeavor</h2>
            <p className="home-text">
                We foster growth and promote enduring business tie-ups with our clients. Customer responsiveness and commitment drive our quest for excellence. Effective supply chain management ensures the sourcing and delivery of materials for nutraceuticals, organic food products, and supplements. We maintain high ethical standards, ensuring client satisfaction through timely service and uncompromising product quality.
            </p>
            <p className="home-text"><strong>Client satisfaction is our ultimate measure of success.</strong></p>

            <h2 className="section-heading">Our Mission</h2>
            <p className="home-text">
                We strive to meet the increasing and diversified demands of customers, be market leaders in various segments, and provide quality products and reliable services. We partner professionally with our principals to achieve sales objectives, market information, and exceptional customer service. Our mission also includes timely updates on market trends and fostering a collaborative, transparent work environment.
            </p>

            <h2 className="section-heading">Why Choose Bravit?</h2>
            <p className="home-text">
                With expertise and strong vendor support, we’ve secured a respected position in the industry. Here’s why clients across the nation appreciate us:
            </p>
            <ul className="home-list">
                <li>Large distribution network</li>
                <li>High-quality product range</li>
                <li>Ethical business policies</li>
                <li>Reasonable prices</li>
                <li>Transparent dealings</li>
                <li>Excellent transport & logistics</li>
                <li>Rich vendor base</li>
                <li>Client-centric approach</li>
            </ul>
        </div>
    );
};

export default Home;
