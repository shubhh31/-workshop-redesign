import React, { useState } from 'react';
import '../styles/WorkshopList.css';

export default function WorkshopList({ onNavigate }) {
  const [workshops] = useState([
    { id: 1, title: 'Python Basics', instructor: 'John Doe', date: '2024-04-15', level: 'Beginner', participants: 25 },
    { id: 2, title: 'Web Development with Django', instructor: 'Jane Smith', date: '2024-04-20', level: 'Intermediate', participants: 18 },
    { id: 3, title: 'Data Science Fundamentals', instructor: 'Mike Johnson', date: '2024-05-01', level: 'Beginner', participants: 30 },
    { id: 4, title: 'Advanced React Patterns', instructor: 'Sarah Lee', date: '2024-05-10', level: 'Advanced', participants: 15 },
  ]);

  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? workshops : workshops.filter(w => w.level === filter);

  return (
    <div className="workshop-list">
      <div className="list-header">
        <h1>Available Workshops</h1>
        <p>Select and book a workshop that interests you</p>
      </div>

      {/* Filters */}
      <div className="filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          All
        </button>
        <button className={`filter-btn ${filter === 'Beginner' ? 'active' : ''}`} onClick={() => setFilter('Beginner')}>
          Beginner
        </button>
        <button className={`filter-btn ${filter === 'Intermediate' ? 'active' : ''}`} onClick={() => setFilter('Intermediate')}>
          Intermediate
        </button>
        <button className={`filter-btn ${filter === 'Advanced' ? 'active' : ''}`} onClick={() => setFilter('Advanced')}>
          Advanced
        </button>
      </div>

      {/* Workshop Cards */}
      <div className="workshops-grid">
        {filtered.map(workshop => (
          <div key={workshop.id} className="workshop-card">
            <div className="workshop-level-badge">{workshop.level}</div>
            <h3>{workshop.title}</h3>
            <p className="instructor">👨‍🏫 {workshop.instructor}</p>
            <div className="workshop-meta">
              <p>📅 {workshop.date}</p>
              <p>👥 {workshop.participants} participants</p>
            </div>
            <button className="btn btn-primary btn-block" onClick={() => onNavigate('book')}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
