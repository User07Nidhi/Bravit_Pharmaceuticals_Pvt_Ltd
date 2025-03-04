import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, phone, email, message } = event.target.elements;

        if (!name.value.trim() || !phone.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert('All fields are required.');
            return;
        }

        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone.value.trim())) {
            alert('Please enter a valid phone number (10-15 digits).');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name.value.trim(),
                    phone: phone.value.trim(),
                    email: email.value.trim(),
                    message: message.value.trim(),
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Message sent successfully!');
                event.target.reset();
                navigate('/thank-you');
            } else {
                alert(result.error || 'An error occurred.');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send the message. Please try again later.');
        }
    };

    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="form-table">
                <div className="form-row">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-row">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="phone" id="phone" name="phone" placeholder="Your Phone Number" required />
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" required />
                </div>
                <div className="form-row">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
