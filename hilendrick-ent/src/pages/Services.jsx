import React from 'react';
import Slider from 'react-slick';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/services.json';
import '../styles/Services.css';

function Services() {
  // Carousel settings for service images
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change image every 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Service images with captions
  const serviceImages = [
    { src: '/images/service-supplies.jpg', caption: 'General Supplies' },
    { src: '/images/service-works.jpg', caption: 'Construction Solutions' },
    { src: '/images/service-nonconsultancy.jpg', caption: 'Non-Consultancy Services' },
    { src: '/images/service-ict.jpg', caption: 'ICT Solutions' },
    { src: '/images/service-smartbin.jpg', caption: 'Smart Bin Solutions' },
    { src: '/images/service-wastemanagement.jpg', caption: 'Waste Management' },
  ];

  return (
    <div className="services">
      {/* Intro Section (Original) */}
      <section className="services-intro">
        <h1>Our Comprehensive Services</h1>
        <p>
          At Hilendrick Enterprises Limited, we offer a wide range of services designed to empower your business. From general supplies to cutting-edge ICT solutions, we’re your trusted partner in Nairobi, Kenya.
        </p>
        <a href="/contact" className="quote-btn">Get Quote</a>
      </section>

      {/* Services List (Original) */}
      <section className="services-list">
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

      {/* Service Images Carousel (New) */}
      <section className="services-carousel-section">
        <h2>Explore Our Services</h2>
        <div className="services-carousel">
          <Slider {...sliderSettings}>
            {serviceImages.map((image, index) => (
              <div key={index} className="service-slide">
                <img src={image.src} alt={image.caption} />
                <div className="caption">{image.caption}</div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Services;