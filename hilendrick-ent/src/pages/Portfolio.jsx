import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import '../styles/Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map((project) => project.category))];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <p className="portfolio-intro">
        Explore some of our recent projects across various sectors, showcasing our expertise and commitment to excellence.
      </p>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="category">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;