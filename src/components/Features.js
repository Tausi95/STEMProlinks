// src/components/Features.js
import React from 'react';
import './Features.css';

const features = [
  {
    image: '../../links.jpg',
    name: 'Feature 1',
    description: 'Background'
  },
  {
    image: '../../pro.jpg',
    name: 'Feature 2',
    description: 'The idea is to have highschool students be guided into taking up careers in Math and Science by removing steriotypes at a young age'
  },
  {
    image: '../../robo.jpg',
    name: 'Feature 3',
    description: 'Mentorship that provide experience and support by exposing young learners to advance technologies'
  }
];

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.image} alt={feature.name} />
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
