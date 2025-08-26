import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // We will create this CSS file next

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend or an email service
        console.log("Form submitted:", formData);
        alert(`Thank you, ${formData.name}! We've received your message and will be in touch shortly.`);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                
                {/* Column 1: Brand & Socials */}
                <div className="footer-column footer-brand">
                    <Link to="/" className="footer-logo">ProCoach</Link>
                    <p className="mission-statement">
                        Your partner in unlocking potential and achieving meaningful success.
                    </p>
                    <div className="social-links">
                        {/* Replace '#' with your actual social media links */}
                        <a href="#" aria-label="LinkedIn">LI</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="Instagram">IN</a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/resume">Resume Writing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Enquiry Form */}
                <div className="footer-column footer-enquiry">
                    <h3>Have a Question?</h3>
                    <form onSubmit={handleFormSubmit} className="footer-enquiry-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message..."
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn-submit-footer">Send Message</button>
                    </form>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ProCoach. All Rights Reserved.</p>
                <div className="footer-legal-links">
                    <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;