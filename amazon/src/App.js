import React from 'react';
import './App.css';
import './header/Header.js';
import Header from './header/Header.js';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home /> ]} />
          <Route path="/checkout" element={[<Header />, <h1>The checkout page</h1>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
