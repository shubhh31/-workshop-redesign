import React, { useState } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import WorkshopList from './components/pages/WorkshopList';
import BookingForm from './components/pages/BookingForm';
import Navigation from './components/Navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Navigation user={user} onNavigate={navigateTo} currentPage={currentPage} />
      <main className="main-content">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'workshops' && <WorkshopList onNavigate={navigateTo} />}
        {currentPage === 'book' && <BookingForm onNavigate={navigateTo} />}
      </main>
    </div>
  );
}
