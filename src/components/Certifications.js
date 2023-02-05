import React, { useState } from 'react';
import "./Certifications.css";

const Certifications = () => {
  const [certifications] = useState([
    {
      title: 'Certification 1',
      description: 'Description for certification 1',
      image: require('./images/150x150-2-500x500.png'),
    },
    {
      title: 'Certification 2',
      description: 'Description for certification 2',
      image: require('./images/150x150-2-500x500.png'),
    },
    {
      title: 'Certification 3',
      description: 'Description for certification 3',
      image: require('./images/150x150-2-500x500.png'),
    },
  ]);

  const [zoom, setZoom] = useState(false);

  const handleClick = () => {
    setZoom(!zoom);
  };

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>
            <h3>{certification.title}</h3>
            <img
              src={certification.image}
              alt={certification.title}
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
            <p>{certification.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
