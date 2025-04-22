import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CTABanner.css';

function CTABanner() {
  return (
    <div className="cta-banner">
      <h2>Ready to Transform Your Business?</h2>
      <p>Get in touch with us today to explore our wide range of services.</p>
      <Link to="/contact" className="cta-btn">Contact Us Now</Link>
    </div>
  );
}

export default CTABanner;