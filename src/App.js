// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/dashboard/dashboard';
import Banner from './Components/banner/banner';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/banner">Banner</Link>
      </nav> */}

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/" element={
          <div>
            <h1>Welcome to the Banner Management App</h1>
            <p>Please navigate to the Dashboard or Banner</p>
          </div>
        } />
      </Routes>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/banner">Banner</Link>
      </nav>
      
    </Router>
  );
};

export default App;
