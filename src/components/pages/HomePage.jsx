import React from 'react';
import '../styles/HomePage.css';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>FOSSEE Workshop Booking</h1>
          <p>Connect with instructors. Learn hands-on skills. Book your workshop today.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => onNavigate('workshops')}>
              Browse Workshops
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('book')}>
              Propose Workshop
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1,250+</div>
            <div className="stat-label">Workshops Conducted</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Instructors</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Students Trained</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">States Reached</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose FOSSEE Workshops?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Easy Scheduling</h3>
            <p>Book or propose workshops with just a few clicks</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Expert Instructors</h3>
            <p>Learn from experienced FOSSEE coordinators</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Hands-On Learning</h3>
            <p>Practical experience with real-world projects</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>National Network</h3>
            <p>Connect with instructors across India</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of students learning through FOSSEE workshops</p>
        <button className="btn btn-primary btn-large" onClick={() => onNavigate('workshops')}>
          Explore Workshops Now
        </button>
      </section>
    </div>
  );
}
