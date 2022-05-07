import {React, useContext} from 'react'
import { CartContext } from '../App'

export default function Checkout() {

  let total = 0;
  const {Cart} = useContext(CartContext);

 Cart.map((single) =>
    total += (single.price * single.quantity)
  );

  function handleSubmit () {
    return null;
  }
 

  return (
    <>
      <form onSubmit={handleSubmit} id="Quantity_form">
              
      <div>Total cost: ${total}</div>
              <button type="submit">Order</button>
            </form>
    </>
  )
}
