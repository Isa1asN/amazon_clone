import React from 'react';
import './App.css';
import './header/Header.js';
import Header from './header/Header.js';
import Home from './home/Home';
import Checkout from './checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={[ <Home /> ]} />
          <Route path="/checkout" element={[ <Checkout />]} />
          <Route path="*" element={[<h1>:( Oops... Page does not exist! </h1>]} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
