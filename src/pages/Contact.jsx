import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <div className="contact">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-content">
            <h1>Reach Out to Us Today</h1>
            <p>Have a question or need a quote? We’re just a message away. Let’s collaborate to bring your vision to life!</p>
            <a href="#contact-form" className="hero-btn">Get in Touch</a>
          </div>
          <div className="hero-shape"></div> {/* Decorative shape */}
        </section>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/+25492837628"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span>Chat with Us</span>
        </a>

        {/* Contact Content */}
        <div className="contact-content" id="contact-form">
          <div className="contact-info">
            <h2>Our Office</h2>
            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Chester House, Koinange Street, Starehe District, Nairobi County, Kenya</p>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="contact-icon" />
              <p>Email: <a href="mailto:info@hilendrick.co.ke">info@hilendrick.co.ke</a></p>
            </div>
            <div className="contact-detail">
              <FaPhone className="contact-icon" />
              <p>Phone: <a href="tel:+254729246533">+254729246533</a></p>
            </div>
            <div className="contact-detail">
              <FaWhatsapp className="contact-icon" />
              <p>WhatsApp: <a href="https://wa.me/+25492837628" target="_blank" rel="noopener noreferrer">+254792837628</a></p>
            </div>
            <div className="contact-detail">
              <FaClock className="contact-icon" />
              <p>Business Hours: Mon-Fri, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="Hilendrick Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8154083121362!2d36.816296074803425!3d-1.2846995987030863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d15cfe9637%3A0xc04fb83dcab3d0ce!2sSpire%20Bank-Chester%20House!5e0!3m2!1sen!2sus!4v1745346137294!5m2!1sen!2sus"
          width="100%"
          height="300" // Maintained reduced height
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

export default Contact;