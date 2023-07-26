import React from 'react';
import './App.css';
import './header/Header.js';
import Header from './header/Header.js';
import Home from './home/Home';
import Checkout from './checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './footer/Footer';
import Login from './login/Login';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={[ <Header />, <Home />, <Footer />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]} />
          <Route path="*" element={[<Header />, <h1 style={{height:'76vh', marginTop:'10vh'}}>:( Oops... Page does not exist! </h1>, <Footer />]} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
