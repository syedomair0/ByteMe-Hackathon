
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './components/Home';
import ResultPage from './ResultPage';
import "./App.css";
import CasinoRoller from './CasinoRoller';
import { useEffect, useState } from 'react'


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/casino" element={<CasinoRoller />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>

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