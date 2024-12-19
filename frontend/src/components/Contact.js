import React from 'react';
import './Contact.css'; // Import the external CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-description">
                If you have a question about us, need more information, or want to make a suggestion, please use any of the following options to contact us:
            </p>
            <ul className="contact-list">
                <li className="contact-item">
                    <strong>Bravit Pharmaceuticals Private Limited</strong>
                </li>
                <li className="contact-item">506 Sakar East, Beside Gurunanak School, Near Bansal Mall</li>
                <li className="contact-item">Tarsali, Vadodara, Gujarat (India) 390004</li>
                <li className="contact-item">
                    Contact: (O) 0265-2990343, (Cell) <a href="tel:+917226021413" className="contact-link">+91 72260 21413</a>
                </li>
                <li className="contact-item">
                    Email: <a href="mailto:ajay@bravitpharmaceuticals.com" className="contact-link">ajay@bravitpharmaceuticals.com</a>
                </li>
                <li className="contact-item">
                    Website: <a href="https://www.bravitpharmaceuticals.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                        www.bravitpharmaceuticals.com
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
