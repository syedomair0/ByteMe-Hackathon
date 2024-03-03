import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CasinoRoller.css';

const activities = ['Movie', 'Golf', 'Hike', 'Shopping', 'Bowling', 'Arcade', 'Beach', 'Kayaking', 'Amusement Parks'];
const cuisines = ['Italian', 'Mexican', 'Japanese', 'American', 'Thai', 'Indian', 'Chinese', 'Middle East'];

const CasinoRoller = () => {
  const navigate = useNavigate();
  const [activity, setActivity] = useState('Generate Activity!');
  const [cuisine, setCuisine] = useState('Generate Cuisine!');
  const [isRolling, setIsRolling] = useState(false);

  const generateBoth = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      const activityIndex = Math.floor(Math.random() * activities.length);
      const cuisineIndex = Math.floor(Math.random() * cuisines.length);
      setActivity(activities[activityIndex]);
      setCuisine(cuisines[cuisineIndex]);
    }, 1000); // Duration of rolling animation
  };

  const likeBoth = () => {
    navigate('/result', { state: { activity, cuisine } });
  };

  return (
    <div className="casino-roller">
      <div className="slot" onAnimationEnd={() => setIsRolling(false)}>
        <div className={`activity ${isRolling ? 'rolling' : ''}`}>{activity}</div>
        <div className={`cuisine ${isRolling ? 'rolling' : ''}`}>{cuisine}</div>
      </div>
      <div className="controls">
        <button onClick={generateBoth}>Generate</button>
        <button onClick={likeBoth}>Like</button>
      </div>
    </div>
  );
};

export default CasinoRoller;
