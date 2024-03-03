import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const ResultPage = () => {
  const location = useLocation(); // Hook to access the current location and state
  const { activity, cuisine } = location.state; // Destructure the passed state

  return (
    <div>
      <h2>Activity: {activity}</h2>
      <h2>Cuisine: {cuisine}</h2>
      <iframe src="https://storage.googleapis.com/maps-solutions-2r30oake86/neighborhood-discovery/lk9s/neighborhood-discovery.html"
        width="600" height="450" style={{border:0}} loading="lazy"></iframe>
    </div>

  );
};

export default ResultPage;
