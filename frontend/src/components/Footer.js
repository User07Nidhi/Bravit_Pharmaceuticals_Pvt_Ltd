import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Bravit Pharmaceuticals Pvt. Ltd.</h3>
                    <p>Committed to quality and excellence in pharmaceuticals and nutraceuticals.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Bravit Pharmaceuticals Private Limited
                        506 Sakar East, Beside Gurunanak School, Tarsali, Vadodara 390009 Gujarat (India)</p>
                    <p>Phone: 0265-2990343</p>

                    <p>Email: bravitpharmaceuticals@gmail.com</p>

                    <p>Time: Mon - Sat (10:00 - 19:00)</p>

                    <p>To contact our customer support, please click here: <a>https://www.supportbravitpharmaceuticals.com</a></p>
                    
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Bravit Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
                <a href="/privacy-policy">Privacy Policy | </a>
                <a href="/terms-and-conditions">Terms and Conditions | </a>
                <a href="/refund-policy">Refund Policy | </a>
                <a href="/shipping-policy">Shipping Policy | </a>
                <a href="/FAQs">FAQs</a>
            </div>
        </footer>
    );
};

export default Footer;
