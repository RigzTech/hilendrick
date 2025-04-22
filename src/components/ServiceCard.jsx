import React from 'react';
import { FaBox, FaHardHat, FaBroom, FaLaptopCode } from 'react-icons/fa';
import '../styles/Services.css';

const iconMap = {
  FaBox: FaBox,
  FaHardHat: FaHardHat,
  FaBroom: FaBroom,
  FaLaptopCode: FaLaptopCode,
};

function ServiceCard({ title, description, icon }) {
  const IconComponent = iconMap[icon];
  if (!IconComponent) {
    console.error(`Icon ${icon} not found in iconMap`);
    return null; // Prevent rendering if icon is invalid
  }
  return (
    <div className="service-card">
      <IconComponent className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;