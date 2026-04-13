import React, { useState } from 'react';
import './Navigation.css';

export default function Navigation({ user, onNavigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('home')}>
          <span className="logo-icon">📚</span>
          <span className="logo-text">FOSSEE Workshops</span>
        </div>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'workshops' ? 'active' : ''}`}
              onClick={() => handleNavClick('workshops')}
            >
              Workshops
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'book' ? 'active' : ''}`}
              onClick={() => handleNavClick('book')}
            >
              Book Workshop
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link auth-btn">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
