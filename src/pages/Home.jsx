import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import CTABanner from '../components/CTABanner';
import servicesData from '../data/services.json';
import testimonialsData from '../data/testimonials.json';
import '../styles/Home.css';

function Home() {
  // Hero Slider Images
  const heroImages = [
    '/images/hero-bg4.jpg',
    '/images/hero-bg.jpg',
    '/images/hero-bg2.jpg',
    '/images/hero-bg3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [heroImages.length]);

  // Testimonials Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change testimonial every 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="hero-content">
          <h1>Empowering Your Business with Comprehensive Solutions</h1>
          <p>From Supplies to Construction and ICT – We’ve Got You Covered</p>
          <div className="hero-buttons">
            <a href="/services" className="btn primary">Explore Services</a>
            <a href="/contact" className="btn secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <Slider {...sliderSettings} className="testimonials-slider">
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </Slider>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}

export default Home;