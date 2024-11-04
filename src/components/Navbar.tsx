import { useState, useEffect } from 'react';
import './Navbar.css';
import MainLayout from "./MainLayout";

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

  return (
    <nav className="navbar">
      {/* <div className="nav-brand">
        <NavLink to="/" className="logo">
          Your Logo
        </NavLink>
      </div> */}

      {/* Hamburger Menu Button (Mobile Only) */}
      {isMobile && (
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"/>
          <span className="bar"/>
          <span className="bar"/>
        </button>
      )}

      {!isMobile && (
       <MainLayout />
      )}

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