import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaHeart, FaShieldAlt, FaLightbulb, FaUsers, FaLeaf } from 'react-icons/fa';
import '../styles/About.css';

function About() {
  const sustainabilityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sustainabilityRef.current) {
      observer.observe(sustainabilityRef.current);
    }

    // Fallback: Force animation after 3 seconds if observer fails
    const timeout = setTimeout(() => {
      if (sustainabilityRef.current) {
        sustainabilityRef.current.classList.add('animate');
      }
    }, 3000);

    return () => {
      if (sustainabilityRef.current) {
        observer.unobserve(sustainabilityRef.current);
      }
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Hilendrick Enterprises Limited</h1>
        <p>
          Hilendrick Enterprises Limited, is a leading provider of integrated business solutions in Kenya. Established with a vision to empower businesses through innovation and reliability, we offer a wide range of services tailored to meet the diverse needs of our clients.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission container">
          <FaBullseye className="section-icon" />
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional services that drive growth and efficiency for our clients, ensuring quality, sustainability, and innovation in every project we undertake.
          </p>
        </div>
        <div className="vision container">
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
          <div className="value-item container">
            <FaHeart className="value-icon" />
            <h3>Integrity</h3>
            <p>We uphold the highest standards of professionalism and ethics.</p>
          </div>
          <div className="value-item container">
            <FaShieldAlt className="value-icon" />
            <h3>Quality</h3>
            <p>We are committed to delivering excellence in every service.</p>
          </div>
          <div className="value-item container">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>We embrace technology and creativity to solve challenges.</p>
          </div>
          <div className="value-item container">
            <FaUsers className="value-icon" />
            <h3>Customer Focus</h3>
            <p>Our clients are at the heart of everything we do.</p>
          </div>
        </div>
      </section>

      

      <section className="services-overview">
        <h2>Our Services</h2>
        <p>
          From general supplies and construction solutions to ICT services, smart bin solutions, and waste management, Hilendrick offers a wide range of services designed to empower your business.
        </p>
        <Link to="/services" className="cta-btn">
          Explore Our Services
        </Link>
      </section>

      <section className="sustainability" ref={sustainabilityRef}>
        <div className="sustainability-content">
          <FaLeaf className="section-icon sustainability-icon" />
          <h2 className="sustainability-heading">
            <span className="typewriter-text">Commitment to Sustainability</span>
          </h2>
          <p className="sustainability-paragraph">
            <span className="word">At</span>
            <span className="word">Hilendrick,</span>
            <span className="word">we</span>
            <span className="word">weave</span>
            <span className="word">sustainability</span>
            <span className="word">into</span>
            <span className="word">the</span>
            <span className="word">fabric</span>
            <span className="word">of</span>
            <span className="word">every</span>
            <span className="word">solution</span>
            <span className="word">we</span>
            <span className="word">offer.</span>
            <span className="word">Imagine</span>
            <span className="word">a</span>
            <span className="word">future</span>
            <span className="word">where</span>
            <span className="word">eco-conscious</span>
            <span className="word">supplies,</span>
            <span className="word">energy-smart</span>
            <span className="word">ICT</span>
            <span className="word">innovations,</span>
            <span className="word">green</span>
            <span className="word">construction</span>
            <span className="word">methods,</span>
            <span className="word">and</span>
            <span className="word">groundbreaking</span>
            <span className="word">waste</span>
            <span className="word">management</span>
            <span className="word">converge</span>
            <span className="word">to</span>
            <span className="word">create</span>
            <span className="word">a</span>
            <span className="word">thriving,</span>
            <span className="word">greener</span>
            <span className="word">Nairobi.</span>
            <span className="word">We’re</span>
            <span className="word">not</span>
            <span className="word">just</span>
            <span className="word">reducing</span>
            <span className="word">our</span>
            <span className="word">environmental</span>
            <span className="word">footprint—we’re</span>
            <span className="word">building</span>
            <span className="word">a</span>
            <span className="word">legacy</span>
            <span className="word">of</span>
            <span className="word">empowerment</span>
            <span className="word">and</span>
            <span className="word">sustainability</span>
            <span className="word">for</span>
            <span className="word">businesses</span>
            <span className="word">across</span>
            <span className="word">Kenya</span>
            <span className="word">and</span>
            <span className="word">beyond.</span>
          </p>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Work with Us?</h2>
        <p>Let’s build your future together.</p>
        <Link to="/contact" className="cta-btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default About;