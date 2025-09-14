// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllCourses } from "../services/api";
// import testimonialImage from "../assets/client-testimonial-2.jpg";
// import "./HomePage.css";

// // Course Card
// const FeaturedCourseCard = ({ course }) => (
//   <div className="featured-course-card">
//     <h4>{course.title}</h4>
//     <p>{course.description.substring(0, 90)}...</p>
//     <div className="course-price-tag">Starting from ₹{course.price}</div>
//     <Link to={`/course/${course.id}`} className="btn-secondary">
//       Learn More
//     </Link>
//   </div>
// );

// function HomePage() {
//   const [featuredCourses, setFeaturedCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await getAllCourses();
//         setFeaturedCourses(response.data.slice(0, 3));
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <div className="home-page-container">

//       {/* Hero Section */}
//       <section className="home-hero">
//         <div className="hero-overlay"></div>
//         <div className="hero-content">
//           <h1 className="hero-title">Unlock Your Potential. Redefine Your Future.</h1>
//           <p className="hero-subtitle">
//             Personalized coaching to help you navigate your career, enhance your leadership, and build a life you love.
//           </p>
//           <Link to="/services" className="btn-primary">Explore Our Services</Link>
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="home-highlights">
//         <div className="highlight-card">🎓 500+ Students Trained</div>
//         <div className="highlight-card">📚 30+ Courses</div>
//         <div className="highlight-card">🏆 Certified Mentors</div>
//         <div className="highlight-card">💼 Career Guidance</div>
//       </section>

//       {/* Services */}
//       <section className="home-section services-overview">
//         <h2 className="section-title">How We Can Help You Succeed</h2>
//         <div className="services-overview-grid">
//           <div className="service-item">
//             <div className="service-icon">🎯</div>
//             <h3>Career Coaching</h3>
//             <p>Navigate transitions, discover your passion, and build a fulfilling career path.</p>
//           </div>
//           <div className="service-item">
//             <div className="service-icon">🚀</div>
//             <h3>Leadership Development</h3>
//             <p>Move from manager to mentor and lead your team with vision and confidence.</p>
//           </div>
//           <div className="service-item">
//             <div className="service-icon">💡</div>
//             <h3>Mindset & Growth</h3>
//             <p>Overcome limiting beliefs and cultivate a resilient mindset for success.</p>
//           </div>
//         </div>
//       </section>

//       {/* Training Features */}
//       <section className="training-features">
//         <h2 className="section-title">Our Training Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">✅ On-time Course Completion</div>
//           <div className="feature-card">✅ Modern Infrastructure</div>
//           <div className="feature-card">✅ Blended Training Approach</div>
//           <div className="feature-card">✅ Free Demo Sessions</div>
//           <div className="feature-card">✅ Affordable Fees</div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       {featuredCourses.length > 0 && (
//         <section className="home-section featured-courses">
//           <h2 className="section-title">Featured Courses</h2>
//           <div className="featured-courses-grid">
//             {featuredCourses.map(course => (
//               <FeaturedCourseCard key={course.id} course={course} />
//             ))}
//           </div>
//           <div className="view-all-link">
//             <Link to="/courses" className="btn-secondary">View All Courses</Link>
//           </div>
//         </section>
//       )}

//       {/* Upcoming Batches */}
//       <section className="upcoming-batches">
//         <h2 className="section-title">Upcoming Batches</h2>
//         <div className="batch-grid">
//           <div className="batch-card">
//             <h3>Career Coaching Bootcamp</h3>
//             <p>Starts: Sept 15, 2025</p>
//             <Link to="/contact" className="btn-secondary">Enroll Now</Link>
//           </div>
//           <div className="batch-card">
//             <h3>Leadership Growth Workshop</h3>
//             <p>Starts: Oct 1, 2025</p>
//             <Link to="/contact" className="btn-secondary">Enroll Now</Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="home-section home-testimonial">
//         <div className="testimonial-content-home">
//           <img src={testimonialImage} alt="Happy coaching client" className="testimonial-image-home"/>
//           <blockquote>
//             "This wasn't just coaching; it was a total mindset shift. I achieved more in three months with ProCoach than I did in the last three years on my own."
//           </blockquote>
//           <cite>- Michael P., Tech Lead</cite>
//         </div>
//       </section>

//       {/* Partner Logos */}
//       <section className="partners-section">
//         <h2 className="section-title">Our Students Work At</h2>
//         <div className="partners-logos">
//           <div className="partner-logo">Google</div>
//           <div className="partner-logo">Microsoft</div>
//           <div className="partner-logo">Amazon</div>
//           <div className="partner-logo">Startups</div>
//         </div>
//       </section>

//       {/* Blog / Resources */}
//       <section className="blog-section">
//         <h2 className="section-title">Latest Resources</h2>
//         <div className="blog-grid">
//           <div className="blog-card">
//             <h3>5 Tips to Boost Your Career</h3>
//             <p>Simple strategies to accelerate your growth and stay competitive.</p>
//           </div>
//           <div className="blog-card">
//             <h3>Leadership Mindset in 2025</h3>
//             <p>How to inspire, mentor, and lead effectively in today’s world.</p>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="home-cta">
//         <h2 className="cta-title">Ready to Take Control of Your Future?</h2>
//         <p>A complimentary 30-minute discovery call is the first step. There's no obligation, only opportunity.</p>
//         <Link to="/contact" className="btn-primary-cta">Book Your Free Call</Link>
//       </section>

//       {/* Footer */}
//       <footer className="site-footer">
//         <div className="footer-grid">
//           <div>
//             <h3>ProCoach</h3>
//             <p>Transforming lives with personalized coaching and training.</p>
//           </div>
//           <div>
//             <h4>Quick Links</h4>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/services">Services</Link></li>
//               <li><Link to="/courses">Courses</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4>Contact</h4>
//             <p>Email: info@procoach.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//         <p className="footer-bottom">© 2025 ProCoach. All rights reserved.</p>
//       </footer>

//     </div>
//   );
// }

// export default HomePage;
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import testimonialImage from "../assets/client-testimonial-2.jpg";
import "./HomePage.css";
import i1 from "../assets/coaching_2.jpg";

// Array of random Unsplash images for hero carousel
const randomImages = [
  i1,
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1050&q=80"
];

// Animated Featured Course Card
const FeaturedCourseCard = ({ course, idx }) => (
  <div 
    className="featured-course-card animated-card"
    style={{ animationDelay: `${0.1 + idx * 0.18}s` }}
  >
    <h4>{course.title}</h4>
    <p>{course.description.substring(0, 90)}...</p>
    <div className="course-price-tag">Starting from ₹{course.price}</div>
    <a href={`/course/${course.id}`} className="btn-secondary">
      Learn More
    </a>
  </div>
);

export default function HomePage() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  
  useEffect(() => {
    // Simulate API (replace with getAllCourses)
    setTimeout(() => {
      setFeaturedCourses([
        { id: 1, title: 'Career Mastery Accelerator', description: 'Transform your career with expert coaching, actionable insights, and lifelong skills development.', price: 1800 },
        { id: 2, title: 'Leadership Blueprint', description: 'Become the visionary leader your team needs, cultivating emotional intelligence and strategic thinking.', price: 2200 },
        { id: 3, title: 'Growth Mindset Intensive', description: 'Crush self-limiting beliefs, build resilience, and unlock breakthroughs for lasting success.', price: 1200 }
      ]);
    }, 900);
  }, []);

  // Carousel slide data (images + headlines)
  const headerSlides = [
    {
      img: randomImages[0],
      headline: "Unlock Your Potential. Redefine Your Future.",
      sub: "Personalized coaching to navigate your career, enhance leadership, and build a life you love."
    },
    {
      img: randomImages[1],
      headline: "Lead With Confidence, Grow With Vision.",
      sub: "Mentorship designed for tomorrow's leaders, starting today."
    },
    {
      img: randomImages[2],
      headline: "Mindset Matters. Success Follows.",
      sub: "Transform beliefs, resilience and performance in months, not years."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 650,
    autoplay: true,
    autoplaySpeed: 3400,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
  };

  // Animated custom cursor
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    function onMove(e) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeChild(cursor);
    }
  }, []);

  return (
    <div className="home-page-container enhanced-bg">
      {/* HEADER Hero Carousel */}
      <header className="premium-header">
        <Slider {...sliderSettings} className="header-carousel">
          {headerSlides.map((slide, idx) => (
            <div className="carousel-slide" key={idx}>
              <img src={slide.img} alt={slide.headline} className="carousel-bg" />
              <div className="carousel-content">
                <h1 className="carousel-title">{slide.headline}</h1>
                <p className="carousel-sub">{slide.sub}</p>
                <a href="/services" className="carousel-btn">Explore Our Services</a>
              </div>
            </div>
          ))}
        </Slider>
        <div className="scroll-indicator"><span></span></div>
      </header>

      {/* Highlights */}
      <section className="home-highlights fade-in">
        <div className="highlight-card">🎓 500+ Students Trained</div>
        <div className="highlight-card">📚 30+ Courses</div>
        <div className="highlight-card">🏆 Certified Mentors</div>
        <div className="highlight-card">💼 Career Guidance</div>
      </section>

      {/* Services Grid */}
      <section className="home-section services-overview fade-in">
        <h2 className="section-title">How We Can Help You Succeed</h2>
        <div className="services-overview-grid">
          <div className="service-item">
            <div className="service-icon">🎯</div>
            <h3>Career Coaching</h3>
            <p>Navigate transitions, discover your passion, and build a fulfilling career path.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🚀</div>
            <h3>Leadership Development</h3>
            <p>Move from manager to mentor and lead your team with vision and confidence.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">💡</div>
            <h3>Mindset & Growth</h3>
            <p>Overcome limiting beliefs and cultivate a resilient mindset for success.</p>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="training-features fade-in">
        <h2 className="section-title">Our Training Features</h2>
        <div className="features-grid">
          <div className="feature-card">✅ On-time Course Completion</div>
          <div className="feature-card">✅ Modern Infrastructure</div>
          <div className="feature-card">✅ Blended Training Approach</div>
          <div className="feature-card">✅ Free Demo Sessions</div>
          <div className="feature-card">✅ Affordable Fees</div>
        </div>
      </section>

      {/* Featured Courses
      {featuredCourses.length > 0 && (
        <section className="home-section featured-courses fade-in">
          <h2 className="section-title">Featured Courses</h2>
          <div className="featured-courses-grid">
            {featuredCourses.map((course, idx) => (
              <FeaturedCourseCard key={course.id} course={course} idx={idx} />
            ))}
          </div>
          <div className="view-all-link">
            <a href="/courses" className="btn-secondary">View All Courses</a>
          </div>
        </section>
      )} */}

      {/* Upcoming Batches */}
      <section className="upcoming-batches fade-in">
        <h2 className="section-title">Upcoming Batches</h2>
        <div className="batch-grid">
          <div className="batch-card">
            <h3>SQL</h3>
            <p>Starts: Sept 15, 2025</p>
            <a href="/contact" className="btn-secondary">Enroll Now</a>
          </div>
          <div className="batch-card">
            <h3>Java</h3>
            <p>Starts: Oct 1, 2025</p>
            <a href="/contact" className="btn-secondary">Enroll Now</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-section home-testimonial fade-in">
        <div className="testimonial-content-home">
          {/* <img src={testimonialImage} alt="Happy coaching client" className="testimonial-image-home"/> */}
          <blockquote>
            "This wasn't just coaching; it was a total mindset shift. I achieved more in three months with ProCoach than I did in the last three years on my own."
          </blockquote>
          <cite>- Devraj Kalpure</cite>
        </div>
      </section>
{/* Recruiters/Partners */}
<section className="partners-section fade-in">
  <h2 className="section-title">Our Students Work At</h2>
  <div className="partners-logos">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
      alt="Google" 
    />
    <img 
      src="https://logospng.org/download/microsoft/logo-microsoft-1024.png" 
      alt="Microsoft" 
    />
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
      alt="Amazon" 
    />
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
      alt="Netflix" 
    />
  </div>
</section>


      {/* Blog/Resources */}
      <section className="blog-section fade-in">
        <h2 className="section-title">Latest Resources</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <h3>5 Tips to Boost Your Career</h3>
            <p>Simple strategies to accelerate your growth and stay competitive.</p>
          </div>
          <div className="blog-card">
            <h3>Leadership Mindset in 2025</h3>
            <p>How to inspire, mentor, and lead effectively in today’s world.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta fade-in">
        <h2 className="cta-title">Ready to Take Control of Your Future?</h2>
        <p>A complimentary 30-minute discovery call is the first step. There's no obligation, only opportunity.</p><br></br>
        <a href="tel:+918743039914" className="btn-primary-cta">Book Your Free Call</a>
      </section>
    </div>
  );
}
