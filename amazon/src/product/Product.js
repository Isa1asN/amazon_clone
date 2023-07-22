import React from 'react';
import './product.css';
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({id, title, image, price, rating}) {
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
      <button className='product_add_to_cart'>Add to cart</button>
    </div>
  );
}

export default Product;
