import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitCertificationEnquiry } from '../services/api'; // updated API call
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.css';

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState(null); // 'success' or 'error'
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const payload = {
            ...formData,
            certificationName: 'General Inquiry' // optional, can be customized
        };

        try {
            await submitCertificationEnquiry(payload);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.error('Error submitting footer enquiry:', err);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                {/* Column 1: Brand & Socials */}
                <div className="footer-column footer-brand">
                    <Link to="/" className="footer-logo">jstechnohub</Link>
                    <p className="mission-statement">
                        Your partner in unlocking potential and achieving meaningful success.
                    </p>
                    <div className="social-links">
  <a
    href="https://www.linkedin.com/company/jstechnohub/"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin size={24} />
  </a>
  <a
    href="https://www.instagram.com/jstechno_hub?igsh=cG81djVwZnNrbDZj"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram size={24} />
  </a>
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
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
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

                        <button type="submit" className="btn-submit-footer" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                        </button>

                        <div className="footer-status-message">
                            {status === 'success' && <p className="successMsg">Your enquiry was submitted successfully!</p>}
                            {status === 'error' && <p className="errorMsg">❌ Failed to submit enquiry. Please try again.</p>}
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} jstechnohub. All Rights Reserved.</p>
                <div className="footer-legal-links">
                    <Link to="/cancellation-policy">Cancellation & Refunds</Link> | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-&-conditions">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
