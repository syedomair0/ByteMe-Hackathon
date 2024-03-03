import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const ResultPage = () => {
  const location = useLocation(); // Hook to access the current location and state
  const { activity, cuisine } = location.state; // Destructure the passed state

  return (
    <div>
      <h2>Activity: {activity}</h2>
      <h2>Cuisine: {cuisine}</h2>
    </div>
  );
};

export default ResultPage;
