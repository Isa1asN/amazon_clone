import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src='/assets/Amazon-Logo.webp' alt='logo' />
      <div className='header_search'>
        <input className='header_search_input' type='text'></input>
      </div>
      <div className='header_nav'>
      
      </div>
    </div>
    
  );
}

export default Header;
