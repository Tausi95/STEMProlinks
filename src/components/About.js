import React from 'react';

const teamMembers = [
  {
    name: 'Chancy Tsonga',
    linkedin: 'https://linkedin.com/in/tausi-tsonga',
    github: 'https://github.com/Tausi95',
    twitter: 'https://x.com/ChancyTausi?s=09',
  },
  // Add other team members here
];

const About = () => (
  <div>
    <h1>About Us</h1>
    <ul>
      {teamMembers.map((member, index) => (
        <li key={index}>
          <p>Name: {member.name}</p>
          <p>LinkedIn: <a href={member.linkedin}>{member.linkedin}</a></p>
          <p>GitHub: <a href={member.github}>{member.github}</a></p>
          <p>Twitter: <a href={member.twitter}>{member.twitter}</a></p>
        </li>
      ))}
    </ul>
  </div>
);

export default About;
