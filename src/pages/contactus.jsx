import React, { useState } from 'react';
import axios from 'axios'; 
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";

function ContactUs () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to backend endpoint (replace '/api/contact' with your actual backend endpoint)
            await axios.post('/api/contact', formData);
            alert('Message sent successfully!');
            // Clear form fields after successful submission
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('Error sending message:', err);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <Navbar/>
            <div className="container">
            <img src='src/assets/IMG_6468.JPG' alt='digital' style={{ width: '20px', height: '20px', marginBottom: '20px' }}></img>
   
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <p>Phone: 412-255-5555</p>
                    <p>Address: 123 Double Road</p>
                    <p>Email: info@tshiamediamarketing.com</p>
                </div>
                <div className="contact-form">
                    <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
                    <form style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }} onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" value={name} onChange={handleChange} style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none' }} required />
                        <br/>
                        <input type="email" name="email" placeholder="Your Email" value={email} onChange={handleChange} style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none' }} required />
                        <br/>
                        <textarea name="message" placeholder="Reason for contacting" value={message} onChange={handleChange} style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none' }} required />
                        <br/>
                        <button type="submit" style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
            <img src='src/assets/IMG_6468.JPG' alt='digital' style={{ width: '20px', height: '20px', marginBottom: '20px' }}></img>
            <Footer/>
        </>
    );
};

export default ContactUs;

