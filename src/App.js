import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';

// --- 1. IMPORT YOUR NEW COMPONENT ---
import ScrollToTop from './components/ScrollToTop';

// All other component imports remain the same
import HomePage from './components/HomePage';
import CourseDetail from './components/CourseDetailPage';
import CoursesPage from './components/CoursesPage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import CertificationsListPage from './components/CertificationsListPage';
import CertificationsPage from './components/CertificationsPage';
import AdminAuth from './components/AdminAuth';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer';

// Styles
import './App.css';


// --- Data for the complex dropdown menu ---
// const certificationsMenu = [
//     { name: 'Sales Force', path: '/certifications/sales-force' },
//     { name: 'CCNA', path: '/certifications/ccna' },
//     { name: 'Palo Alto', path: '/certifications/palo-alto' },
//     { name: 'Vmware', path: '/certifications/vmware' },
//     { name: 'CBAP', path: '/certifications/cbap' },
//     { 
//         name: 'Togaf Course', 
//         submenu: [
//             { name: '(CAMS) Training & Certification', path: '/certifications/cams-training' },
//             { name: 'Certified Internal Auditor (CIA)', path: '/certifications/cia-training' },
//             { name: 'Certified Associate Project Management (CAPM)', path: '/certifications/capm-training' },
//         ]
//     }
// ];

// The AppLogic component does NOT need any changes
function AppLogic() {
    // ... all of your existing code for AppLogic remains exactly the same ...
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAdminAuthenticated') === 'true');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(sessionStorage.getItem('isAdminAuthenticated') === 'true');
        };
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogin = (password) => {
        if (password === 'coaching') {
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            setIsAuthenticated(true);
            navigate('/admin');
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        setIsAuthenticated(false);
        navigate('/');
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="app-header">
                <Link to="/" className="logo" onClick={closeMenu}>jstechnohub</Link>
                
                <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="nav-item" onClick={closeMenu} end>Home</NavLink>
                    <NavLink to="/courses" className="nav-item" onClick={closeMenu}>Courses</NavLink>
                    {/* Dropdown for Certifications */}
  <div className="nav-item dropdown">
    <span className="dropdown-toggle">Certifications ▾</span>
    <div className="dropdown-menu">
      <NavLink to="/certifications/sales-force" className="dropdown-link" onClick={closeMenu}>Sales Force</NavLink>
      <NavLink to="/certifications/ccna" className="dropdown-link" onClick={closeMenu}>CCNA</NavLink>
      <NavLink to="/certifications/palo-alto" className="dropdown-link" onClick={closeMenu}>Palo Alto</NavLink>
      <NavLink to="/certifications/vmware" className="dropdown-link" onClick={closeMenu}>Vmware</NavLink>
      <NavLink to="/certifications/cbap" className="dropdown-link" onClick={closeMenu}>CBAP</NavLink>
      <NavLink to="/certifications/cams-training" className="dropdown-link" onClick={closeMenu}>CAMS Training & Certification</NavLink>
      <NavLink to="/certifications/cia-training" className="dropdown-link" onClick={closeMenu}>Certified Internal Auditor (CIA)</NavLink>
      <NavLink to="/certifications/capm-training" className="dropdown-link" onClick={closeMenu}>Certified Associate Project Management (CAPM)</NavLink>
      
    </div>
  </div>
<NavLink to="/services" className="nav-item" onClick={closeMenu}>Services</NavLink>
                    <NavLink to="/resume" className="nav-item" onClick={closeMenu}>Resume</NavLink>
                    <NavLink to="/about" className="nav-item" onClick={closeMenu}>About Us</NavLink>
                    
                    {isAuthenticated && (
                        <NavLink to="/admin" className="nav-item" onClick={closeMenu}>Admin Panel</NavLink>
                    )}
                </nav>
            </header>
            
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/course/:id" element={<CourseDetail />} />
                    <Route path="/certifications" element={<CertificationsListPage />} />
                    <Route path="/certifications/:certId" element={<CertificationsPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/admin" element={ isAuthenticated ? <AdminPage onLogout={handleLogout} /> : <AdminAuth onLogin={handleLogin} /> } />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

// The main App component is where you'll make the change
function App() {
    return (
        <Router>
            {/* --- 2. PLACE THE COMPONENT HERE --- */}
            <ScrollToTop />
            <AppLogic />
        </Router>
    );
}

export default App;