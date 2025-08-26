import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../services/api'; // Assuming this API service exists
import './HomePage.css'; // We will create this CSS file next

// You can replace this with a real client photo or a professional stock photo
import testimonialImage from '../assets/client-testimonial-2.jpg'; 

// Helper component for individual course cards
const FeaturedCourseCard = ({ course }) => (
    <div className="featured-course-card">
        <h4>{course.title}</h4>
        <p>{course.description.substring(0, 90)}...</p>
        <div className="course-price-tag">Starting from ₹{course.price}</div>
        <Link to={`/course/${course.id}`} className="btn-secondary">
            Learn More
        </Link>
    </div>
);

function HomePage() {
    const [featuredCourses, setFeaturedCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getAllCourses();
                // Show a limited number of courses on the homepage, e.g., the first 3
                setFeaturedCourses(response.data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching courses for homepage:", error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="home-page-container">
            {/* Section 1: Hero */}
            <section className="home-hero">
                <div className="hero-content">
                    <h1 className="hero-title">Unlock Your Potential. Redefine Your Future.</h1>
                    <p className="hero-subtitle">
                        Personalized coaching to help you navigate your career, enhance your leadership, and build a life you love.
                    </p>
                    <Link to="/services" className="btn-primary">Explore Our Services</Link>
                </div>
            </section>

            {/* Section 2: Services Overview */}
            <section className="home-section services-overview">
                <h2 className="section-title">How We Can Help You Succeed</h2>
                <div className="services-overview-grid">
                    <div className="service-item">
                        <div className="service-icon">ICON</div>
                        <h3>Career Coaching</h3>
                        <p>Navigate transitions, discover your passion, and build a fulfilling career path.</p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">ICON</div>
                        <h3>Leadership Development</h3>
                        <p>Move from manager to mentor and lead your team with vision and confidence.</p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">ICON</div>
                        <h3>Mindset & Growth</h3>
                        <p>Overcome limiting beliefs and cultivate a resilient mindset for success.</p>
                    </div>
                </div>
            </section>

            {/* Section 3: Featured Courses */}
            {featuredCourses.length > 0 && (
                <section className="home-section featured-courses">
                    <h2 className="section-title">Featured Courses</h2>
                    <div className="featured-courses-grid">
                        {featuredCourses.map(course => (
                            <FeaturedCourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    <div className="view-all-link">
                        <Link to="/courses" className="btn-secondary">View All Courses</Link>
                    </div>
                </section>
            )}

            {/* Section 4: Testimonial */}
            <section className="home-section home-testimonial">
                 <div className="testimonial-content-home">
                    <img src={testimonialImage} alt="Happy coaching client" className="testimonial-image-home"/>
                    <blockquote>
                        "This wasn't just coaching; it was a total mindset shift. I achieved more in three months with ProCoach than I did in the last three years on my own. Truly life-changing."
                    </blockquote>
                    <cite>- Michael P., Tech Lead</cite>
                 </div>
            </section>

            {/* Section 5: Final Call to Action */}
            <section className="home-cta">
                <h2 className="cta-title">Ready to Take Control of Your Future?</h2>
                <p>A complimentary 30-minute discovery call is the first step. There's no obligation, only opportunity.</p>
                <Link to="/contact" className="btn-primary-cta">Book Your Free Call</Link>
            </section>
        </div>
    );
}

export default HomePage;