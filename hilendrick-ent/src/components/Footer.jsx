import React from 'react';
import Newsletter from './Newsletter';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Chester House, Koinange Street, Nairobi, Kenya</p>
          <p>Email: info@hilendrick.co.ke</p>
          <p>Phone: +254 123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <Newsletter />
        </div>
      </div>
      <p className="footer-bottom">© 2025 Hilendrick Enterprises Limited. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;