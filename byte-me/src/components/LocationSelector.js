// src/components/LocationSelector.js
import React, { useState } from 'react';
import axios from 'axios';
import './LocationSelector.css';

const LocationSelector = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [datePlan, setDatePlan] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocations([...event.target.selectedOptions].map(option => option.value));
  };

  const generateDatePlan = async () => {
    try {
      const response = await axios.post('http://localhost:5001/generate-plan', {
        locations: selectedLocations,
      });
      setDatePlan(response.data.plan);
    } catch (error) {
      console.error('Error while fetching the date plan:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateDatePlan();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select locations in St. Louis:
          <select multiple onChange={handleLocationChange}>
            <option value="Forest Park">Forest Park</option>
            <option value="Botanical Garden">Botanical Garden</option>
            <option value="The Gateway Arch">The Gateway Arch</option>
            <option value="Art Museum">Art Museum</option>
            <option value="Science Center">Science Center</option>
          </select>
        </label>
        <button type="submit">Create Date Plan</button>
      </form>
      {datePlan && <p>Date Plan: {datePlan}</p>}
    </div>
  );
};

export default LocationSelector;
