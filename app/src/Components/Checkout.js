import {React, useContext} from 'react'
import { CartContext } from '../App'

export default function Checkout() {

  let total = 0;
  const {Cart} = useContext(CartContext);

 Cart.map((single) =>
    total += (single.price * single.quantity)
  );


  return (
    <div>{total}</div>
  )
}
