import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { activity, cuisine } = location.state;

  return (
    <div style={{ textAlign: 'center' }}> {/* Center the content */}
      <h2>Activity: {activity}</h2>
      <h2>Cuisine: {cuisine}</h2>
      {/* Iframe for Google Map */}
      <div style={{ margin: 'auto', width: '80%', height: '500px', border: '0' }}> {/* Adjust width, height as needed */}
        <iframe 
          src="https://storage.googleapis.com/maps-solutions-2r30oake86/neighborhood-discovery/a0qz/neighborhood-discovery.html"
          width="100%"
          height="100%"
          style={{ border: '0' }} // Ensures no border
          loading="lazy"
          title="Neighborhood Discovery"
        ></iframe>
      </div>
    </div>
  );
};

export default ResultPage;
