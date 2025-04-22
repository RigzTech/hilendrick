import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
        alert('Quote request sent successfully!');
        setFormData({ name: '', email: '', service: '', details: '' });
      })
      .catch((error) => {
        alert('Failed to send quote request. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className="quote" style={{ padding: '100px 50px', textAlign: 'center' }}>
      <h1>Request a Quote</h1>
      <p className="quote-intro">
        Let us help you with your business needs. Fill out the form below, and we’ll get back to you with a tailored solution.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Needed</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="General Supplies">General Supplies</option>
            <option value="Works">Works (Construction & Maintenance)</option>
            <option value="Non-Consultancy Services">Non-Consultancy Services</option>
            <option value="ICT & Digital Services">ICT & Digital Services</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="details">Project Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Quote Request</button>
      </form>
    </div>
  );
}

export default Quote;