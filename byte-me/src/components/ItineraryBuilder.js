// src/components/ItineraryBuilder.js
import React, { useState } from 'react';
import axios from 'axios';

const ItineraryBuilder = () => {
  const [locations, setLocations] = useState([]); // This would be the user's input
  const [datePlan, setDatePlan] = useState('');

  const handleLocationChange = (event) => {
    // Update locations state based on user input
  };

  const generateDatePlan = async () => {
    try {
      const response = await axios.post('http://localhost:5001/generate-plan', {
        locations: locations, // This would be the array of locations the user has selected
      });
      setDatePlan(response.data.plan); // Update your state with the received plan
    } catch (error) {
      console.error('Error while fetching the date plan:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      {/* Add inputs for selecting locations */}
      <button onClick={generateDatePlan}>Create Date Plan</button>
      {/* Display the date plan */}
      {datePlan && <p>Date Plan: {datePlan}</p>}
    </div>
  );
};

export default ItineraryBuilder;
