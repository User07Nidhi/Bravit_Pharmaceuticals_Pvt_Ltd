import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>
            <p className="about-text">
                Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat (India) based company dealing with pharmaceuticals, nutraceuticals, health and hygiene, food and supplements, trading, import, and export.
            </p>
            <p className="about-text">
                We assure longer and closer working relationships with our clients and suppliers, not only providing immediate and reliable services but also continually exceeding expectations and goals.
            </p>
            <p className="about-text">
                We are able to integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to the needs of industries looking for a new market. We look forward to welcoming you to our company and working to develop and enhance your current business with us.
            </p>

            <div className="about-image-container">
                <img src="/about.png" alt="customer support" className="about-img" />
            </div>
            
        </div>
    );
};

export default About;
