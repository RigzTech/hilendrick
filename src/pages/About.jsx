import React from 'react';
import { FaBullseye, FaEye, FaHeart, FaShieldAlt, FaLightbulb, FaUsers } from 'react-icons/fa';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Hilendrick Enterprises Limited</h1>
        <p>
          Hilendrick Enterprises Limited, is a leading provider of integrated business solutions in Kenya. Established with a vision to empower businesses through innovation and reliability, we offer a wide range of services tailored to meet the diverse needs of our clients.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <FaBullseye className="section-icon" />
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional services that drive growth and efficiency for our clients, ensuring quality, sustainability, and innovation in every project we undertake.
          </p>
        </div>
        <div className="vision">
          <FaEye className="section-icon" />
          <h2>Our Vision</h2>
          <p>
            To be the most trusted partner for businesses in Kenya, transforming industries through comprehensive and innovative solutions.
          </p>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <FaHeart className="value-icon" />
            <h3>Integrity</h3>
            <p>We uphold the highest standards of professionalism and ethics.</p>
          </div>
          <div className="value-item">
            <FaShieldAlt className="value-icon" />
            <h3>Quality</h3>
            <p>We are committed to delivering excellence in every service.</p>
          </div>
          <div className="value-item">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>We embrace technology and creativity to solve challenges.</p>
          </div>
          <div className="value-item">
            <FaUsers className="value-icon" />
            <h3>Customer Focus</h3>
            <p>Our clients are at the heart of everything we do.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-gallery">
          <img src="/images/team.jpg" alt="Our Team" />
          <img src="/images/office.jpg" alt="Our Office" />
        </div>
      </section>
    </div>
  );
}

export default About;