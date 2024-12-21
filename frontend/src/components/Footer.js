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
                    <p>Phone: +91 9876543210</p>
                    <p>Email: info@bravitpharma.com</p>
                    <p>Address: 123 Industrial Area, Vadodara, Gujarat, India</p>
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
            </div>
        </footer>
    );
};

export default Footer;
