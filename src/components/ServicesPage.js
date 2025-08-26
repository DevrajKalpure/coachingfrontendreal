import React, { useState } from 'react';
import './ServicesPage.css';

// You can replace this with a real client photo or a professional stock photo
import testimonialImage from '../assets/client-testimonial.jpg'; // Create an assets folder in src and add an image

// Data for our services
const servicesData = [
    {
        title: "Career Transition Coaching",
        description: "Feeling stuck or unfulfilled in your current role? We'll partner with you to navigate the complexities of a career change, uncover your passions, and land a job you love.",
        outcomes: ["Clarify your ideal career path", "Develop a powerful personal brand", "Master interview and negotiation skills", "Create a strategic job search plan"]
    },
    {
        title: "Leadership Development",
        description: "Move from being a manager to an influential leader. This program is for new and aspiring leaders who want to build high-performing teams and lead with confidence and vision.",
        outcomes: ["Define your authentic leadership style", "Improve communication and influence", "Learn to motivate and empower your team", "Manage conflict and lead through change"]
    },
    {
        title: "Personal Growth & Mindset",
        description: "Unlock your true potential by overcoming limiting beliefs. This deeply personal coaching experience helps you build unshakable confidence and a resilient mindset.",
        outcomes: ["Identify and reframe limiting beliefs", "Build powerful, lasting habits", "Improve self-awareness and confidence", "Set and achieve meaningful personal goals"]
    }
];

// Reusable FAQ Item Component
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

function ServicesPage() {
    return (
        <div className="services-page-container">
            {/* Section 1: Hero */}
            <header className="services-hero">
                <div className="hero-content">
                    <h1>Services Designed for Your Success</h1>
                    <p className="subtitle">Discover our tailored coaching programs designed to help you achieve your professional and personal goals.</p>
                </div>
            </header>

            {/* Section 2: Service Offerings */}
            <section className="services-section">
                <div className="section-title">
                    <h2>Our Coaching Programs</h2>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <h4>Key Outcomes:</h4>
                            <ul>
                                {service.outcomes.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                            <a href="/contact" className="service-button">Learn More</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: How It Works */}
            <section className="how-it-works-section">
                <div className="section-title">
                    <h2>Our Simple 3-Step Process</h2>
                </div>
                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Discovery Call</h3>
                        <p>A complimentary 30-minute call to discuss your goals and see if we're a good fit.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Strategy Session</h3>
                        <p>A deep-dive 90-minute session to create a personalized roadmap for your success.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Ongoing Support</h3>
                        <p>Regular coaching sessions with continuous support to keep you accountable and on track.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Testimonial */}
            <section className="testimonial-section">
                 <div className="testimonial-content">
                    <img src={testimonialImage} alt="Happy Client" className="testimonial-image"/>
                    <blockquote>
                        "Working with ProCoach was a game-changer. I not only found a new career path but also gained a level of confidence I never thought possible. The investment paid for itself tenfold."
                    </blockquote>
                    <cite>- Sarah L., Former Client</cite>
                 </div>
            </section>

            {/* Section 5: FAQ */}
            <section className="faq-section">
                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    <FaqItem
                        question="Who is coaching for?"
                        answer="Coaching is for anyone who is committed to growth and ready to make a positive change in their life. Whether you're feeling stuck, facing a major transition, or wanting to level up, coaching provides the structure and support to get you there faster."
                    />
                    <FaqItem
                        question="What is the difference between coaching and therapy?"
                        answer="Therapy often focuses on healing past traumas and managing mental health conditions, while coaching is forward-focused. We work on where you are now, where you want to be, and create an actionable plan to bridge that gap."
                    />
                    <FaqItem
                        question="How long does a typical coaching engagement last?"
                        answer="Most clients see significant results within 3 to 6 months. We offer various packages to suit different needs, starting from a 3-month commitment to ensure we have enough time to create lasting change."
                    />
                </div>
            </section>
            
            {/* Section 6: Final CTA */}
            <section className="services-cta">
                <h2>Ready to Take the First Step?</h2>
                <p>Your journey to a more fulfilling life and career starts with a single conversation. Let's talk.</p>
                <a href="/contact" className="cta-button">Book Your Free Discovery Call</a>
            </section>
        </div>
    );
}

export default ServicesPage;