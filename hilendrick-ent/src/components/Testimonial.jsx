import React from 'react';
import '../styles/Testimonial.css';

function Testimonial({ name, company, quote }) {
  return (
    <div className="testimonial">
      <p className="quote">"{quote}"</p>
      <p className="author">- {name}, {company}</p>
    </div>
  );
}

export default Testimonial;