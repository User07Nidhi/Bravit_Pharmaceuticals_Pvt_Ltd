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

            {/* Table Section */}

            <table className="about-table">
                <thead>
                    <tr>
                        <th>Our Endeavor</th>
                        <th>Our Mission</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p className="home-text">
                            We foster growth and promote enduring business tie-ups with our clients. Customer responsiveness and commitment drive our quest for excellence. Effective supply chain management ensures the sourcing and delivery of materials for nutraceuticals, organic food products, and supplements. We maintain high ethical standards, ensuring client satisfaction through timely service and uncompromising product quality.
                        </p>
                            <p className="home-text"><strong>Client satisfaction is our ultimate measure of success.</strong></p>
                        </td>
                        <td>
                            <p className="home-text">
                                We strive to meet the increasing and diversified demands of customers, be market leaders in various segments, and provide quality products and reliable services. We partner professionally with our principals to achieve sales objectives, market information, and exceptional customer service. Our mission also includes timely updates on market trends and fostering a collaborative, transparent work environment.
                            </p>

                        </td>
                    </tr>

                </tbody>
            </table>
            <div className="about-image-container">
                <img src="/about.png" alt="customer support" className="about-img" />
            </div>
            <div className="info-container">
                <div className="info-box">
                    <h3>Our Concern for Quality</h3>
                    <p>...</p>
                </div>

                <div className="info-box">
                    <h3>Our Professional Ethics</h3>
                    <p>...</p>
                </div>

                <div className="info-box">
                    <h3>Our Global Reach</h3>
                    <p>...</p>
                </div>
            </div>
        </div>
    );
};

export default About;
