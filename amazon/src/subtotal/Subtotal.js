import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider'
function Subtotal() {
    const [state, dispatch] = useStateValue();
    const cart = state.cart;
    let totalCost = 0;
    const getValue = () => {
        for (let index = 0; index < cart.length; index++) {
            totalCost = totalCost + cart[index].price;
        }
        return totalCost;
    }
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) =>(
            <>
                <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>  
                <small className='subtotal_gift'>
                    <input type='checkbox'></input>
                    This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getValue()}
        displayType='text'
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal