// src/components/SomeComponent.js (or any other component)

import React from 'react';
import { Link } from 'react-router-dom';

const SomeComponent = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default SomeComponent;
