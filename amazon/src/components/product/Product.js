/* eslint-disable no-unused-vars */
import React from 'react';
import './product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../stateProvider';

function Product({id, title, image, price, rating}) {
  const [state, dispatch] = useStateValue();
  // const {cart} = state;
  // console.log(cart)
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id : id,
        title : title,
        image : image,
        price : price,
        rating : rating
      }
    });
  }
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          <p> {Array(rating).fill(<StarRateIcon className='rate_icon'/>)} </p>
        </div>
      </div>
      <img src={image} alt='product_image'></img>
      <button className='product_add_to_cart' onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
