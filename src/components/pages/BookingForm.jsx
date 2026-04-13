import React, { useState } from 'react';
import '../styles/BookingForm.css';

export default function BookingForm({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    workshopType: '',
    proposedDate: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        workshopType: '',
        proposedDate: '',
        description: '',
      });
    }, 3000);
  };

  return (
    <div className="booking-form-container">
      <div className="form-header">
        <h1>Book or Propose a Workshop</h1>
        <p>Fill out the form below to either book an existing workshop or propose a new one</p>
      </div>

      {submitted && (
        <div className="success-message">
          ✓ Your request has been submitted successfully! We'll get back to you soon.
        </div>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="institution">Institution/Organization *</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Your college/organization name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="workshopType">Workshop Type *</label>
          <select
            id="workshopType"
            name="workshopType"
            value={formData.workshopType}
            onChange={handleChange}
            required
          >
            <option value="">Select a workshop type</option>
            <option value="python">Python Programming</option>
            <option value="web">Web Development</option>
            <option value="data">Data Science</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="proposedDate">Preferred Date *</label>
          <input
            type="date"
            id="proposedDate"
            name="proposedDate"
            value={formData.proposedDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Additional Details</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us more about what you're looking for..."
            rows="5"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-large btn-block">
          Submit Request
        </button>
      </form>
    </div>
  );
}
