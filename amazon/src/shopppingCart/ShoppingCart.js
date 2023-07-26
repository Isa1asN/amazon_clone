import React from 'react'
import './shoppingCart.css'
import StarRateIcon from '@material-ui/icons/StarRate'

function ShoppingCart({title, price, rating, image}) {
    // const removeProduct
    
  return (
    <div className='shopping_cart'>
      <div className='shopping_cart_info'>
        <p>{title}</p>
        <p className='shopping_cart_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='shopping_cart_rating'>
          <p> {Array(rating).fill(<StarRateIcon className='rate_icon'/>)} </p>
        </div>
      <button className='remove_from_cart' >remove from cart</button>
      </div>
      <img src={image} alt='shopping_cart_image'></img>
    </div>
  );
}

export default ShoppingCart