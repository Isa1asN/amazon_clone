import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src='/assets/Amazon-Logo.webp'  alt='logo' />
      <div className='header_search'>
        <input className='header_search_input' type='text'></input>
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLn1'>Hello Guest</span>
          <span className='header_optionLn2'>Sign In</span>  
        </div>
        <div className='header_option'>
          <span className='header_optionLn1'>Returns</span>
          <span className='header_optionLn2'>& Orders</span>  
        </div>
        <div className='header_option'>
          <span className='header_optionLn1'>Your</span>
          <span className='header_optionLn2'>Prime</span>  
        </div>
      </div>
    </div>
    
  );
}

export default Header;
