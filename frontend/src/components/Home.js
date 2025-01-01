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
            {/* Image Gallery */}
            <div className="gallery-wrap">
                <img
                    src="/back.png"
                    alt="Scroll Left"
                    className="gallery-btn"
                    onClick={scrollLeft}
                />
                <div className="gallery" ref={galleryRef}>
                    <span><img src="/image1.jpg" alt="Bravit img 1" /></span>
                    <span><img src="/image2.jpg" alt="Bravit img 2" /></span>
                    <span><img src="/image3.jpg" alt="Bravit img 3" /></span>
                    <span><img src="/image4.jpg" alt="Bravit img 4" /></span>
                    <span><img src="/image5.jpg" alt="Bravit img 5" /></span>
                    <span><img src="/image6.jpg" alt="Bravit img 6" /></span>
                    <span><img src="/image7.jpg" alt="Bravit img 7" /></span>
                </div>
                <img
                    src="/next.png"
                    alt="Scroll Right"
                    className="gallery-btn"
                    onClick={scrollRight}
                />
            </div>

            {/* Main Content Section */}
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
    );
};

export default Home;
