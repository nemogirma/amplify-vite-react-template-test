import { useState, useEffect } from 'react';
import { Routes,Route,NavLink } from 'react-router-dom';
import './Navbar.css';
import MainLayout from "./MainLayout";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";
// import "./MainLayout.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link (mobile only)
  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar">
      {/* <div className="nav-brand">
        <NavLink to="/" className="logo">
          Your Logo
        </NavLink>
      </div> */}

      {/* Hamburger Menu Button (Mobile Only) */}
      {isMobile && (
        <div className="Hamberger-Menu-content">
          <button 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="bar"/>
            <span className="bar"/>
            <span className="bar"/>
          </button>
        </div>
      )}

     {isMobile && (
        <div className={`nav-links ${isMobile ? 'mobile' : ''} ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
        
        </div>
      )}

{/* {isMobile && (
      <div className="HambergerMenuItems">
        <main className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )} */}
      

      {/* {!isMobile && ( */}
       <MainLayout />
      {/* )} */}

      {/* Navigation Links */}
      {/* <div className={`nav-links ${isMobile ? 'mobile' : ''} ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
        
      </div> */}
    </nav>
  );
};

export default Navbar;
