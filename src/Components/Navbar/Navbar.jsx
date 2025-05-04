import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">YouthFest 2025</Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/events" className={`navbar-link ${location.pathname === '/events' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Events</Link>
            </li>
            <li className="navbar-item">
              <Link to="/stalls" className={`navbar-link ${location.pathname === '/stalls' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Stalls</Link>
            </li>
            <li className="navbar-item">
              <Link to="/timeline" className={`navbar-link ${location.pathname === '/timeline' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Timeline</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;