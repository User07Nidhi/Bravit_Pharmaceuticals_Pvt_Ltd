import React, { useRef } from 'react';
import './Home.css';

const Home = () => {
    const galleryRef = useRef(null);

    const scrollLeft = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({
                left: -900,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({
                left: 900,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="home-container">
            {/* Image Slider */}
            <div className="gallery-wrap">
                <img
                    src="/back.png"
                    alt="Scroll Left"
                    className="gallery-btn"
                    onClick={scrollLeft}
                />
                <div className="gallery" ref={galleryRef}>
                    <span><img src="/image1.jpg" alt="Bravit Office 1" /></span>
                    <span><img src="/image2.jpg" alt="Bravit Office 2" /></span>
                    <span><img src="/image3.jpg" alt="Bravit Office 3" /></span>
                    <span><img src="/image4.jpg" alt="Bravit Office 4" /></span>
                    <span><img src="/image5.jpg" alt="Bravit Office 5" /></span>
                    <span><img src="/image6.jpg" alt="Bravit Office 6" /></span>
                    <span><img src="/image7.jpg" alt="Bravit Office 7" /></span>
                </div>
                <img
                    src="/next.png"
                    alt="Scroll Right"
                    className="gallery-btn"
                    onClick={scrollRight}
                />
            </div>

            {/* Main Content Section */}
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
