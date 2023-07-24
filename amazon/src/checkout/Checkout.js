import React from 'react'
import './checkout.css'
import Subtotal from '../subtotal/Subtotal'
function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='ad_img' className='checkout_ad'></img>

            <div>
                <h1 className='checkout_title'>Your shopping cart</h1>
            </div>
        </div>

        <div className='checkout_right'>
            <h2>The subtotal</h2>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout