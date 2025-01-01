import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const message = event.target.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert(`Thank you, ${name}, for contacting us!`);
        event.target.reset();
    };

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

            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-heading">Send us a message</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="form-submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
