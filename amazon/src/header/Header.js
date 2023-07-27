import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider';

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();
  const {cart} = state;
  return ( 
    <div className='header'>
      <Link to="/">
        <img className='header_logo' src='/assets/Amazon-Logo.webp'  alt='logo' />
      </Link>
      <div className='header_search'>
        <input className='header_search_input' type='text'></input>
        <SearchIcon className='header_search_icon'/>
      </div>
      <div className='header_nav'>
        <Link to="login">
        <div className='header_option'>
          <span className='header_optionLn1'>Hello Guest</span>
          <span className='header_optionLn2'>Sign In</span>  
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLn1'>Returns</span> 
          <span className='header_optionLn2'>& Orders</span>  
        </div>
        <div className='header_option'>
          <span className='header_optionLn1'>Your</span>
          <span className='header_optionLn2'>Prime</span>  
        </div>
        <Link to="/checkout">
          <div className='header_basket'>
            <ShoppingCartIcon className='cart_icon' />
            <span className='header_optionLn2 header_basket_count'>{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
    
  );
}

export default Header;
