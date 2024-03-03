import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { activity, cuisine } = location.state;

  // Define inline styles for the button-like elements
  const buttonStyle = {
    display: 'inline-block', // Make them inline elements
    padding: '10px 20px', // Add some padding
    margin: '10px 5px', // Add some margin
    backgroundColor: '#007bff', // Button background color
    color: 'white', // Text color
    borderRadius: '5px', // Rounded corners
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)', // Simple box shadow for depth
    fontWeight: 'bold', // Make the text bold
    textDecoration: 'none', // Remove underline from links if you use <a> tags
  };

  // Define inline styles for the container
  const containerStyle = {
    textAlign: 'center', // Center the content
    padding: '20px', // Add padding to the container
  };

  // Define inline styles for the iframe container
  const iframeContainerStyle = {
    margin: 'auto',
    width: '80%',
    height: '500px',
    border: '0',
  };

  return (
    <div style={containerStyle}>
      {/* Use the buttonStyle for styling the activity and cuisine */}
      <div style={buttonStyle}>Activity: {activity}</div>
      <div style={buttonStyle}>Cuisine: {cuisine}</div>
      {/* Iframe for Google Map */}
      <div style={iframeContainerStyle}>
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
