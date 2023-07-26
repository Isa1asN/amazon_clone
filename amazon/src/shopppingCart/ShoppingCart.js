import React from 'react'
import './shoppingCart.css'
import StarRateIcon from '@material-ui/icons/StarRate'
import { useStateValue } from '../stateProvider';


function ShoppingCart({id, title, price, rating, image}) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();
    const removeFromCart = () => {
      dispatch({
        type : 'REMOVE_FROM_CART',
        item : {
          id : id,
          title : title,
          price : price,
          rating : rating,
          image : image
        }
      });
    }
    
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
      <button className='remove_from_cart' onClick={removeFromCart} >remove from cart</button>
      </div>
      <img src={image} alt='shopping_cart_image'></img>
    </div>
  );
}

export default ShoppingCart