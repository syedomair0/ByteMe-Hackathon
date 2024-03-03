import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './components/Home';
import ResultPage from './ResultPage';
import "./App.css";
import CasinoRoller from './CasinoRoller';
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
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
    </div>
  );
};
export default App;