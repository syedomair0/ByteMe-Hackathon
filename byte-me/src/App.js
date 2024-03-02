import React from 'react';
import './App.css'; // Make sure to create an App.css file for your styles
import image from '../src/assets/cute2.png'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Find Your Perfect Match</h1>
        <h2>with</h2>
        <h3>TakeMe Dating app</h3>
        <h3>Try me</h3>
        <h3>Text me</h3>
        <h3>Take me</h3>
      </header>
      <main className="app-content">
        <div className="app-phone">
          {/* You can use an image here or create an illustration with CSS */}
          <img src={image} alt="Phone Illustration" />
        </div>
        <button className="sign-up-button">Sign Up</button>
      </main>
    </div>
  );
}

export default App;