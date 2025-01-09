import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const message = event.target.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                event.target.reset();
            } else {
                alert(data.error || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form. Please try again later.');
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
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
