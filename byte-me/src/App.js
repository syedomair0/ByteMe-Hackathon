import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './components/Home';
import SwipingFeature from './components/SwipingFeature'; // Import the new component
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/swipe" element={<SwipingFeature />} /> {/* New route for swiping */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
