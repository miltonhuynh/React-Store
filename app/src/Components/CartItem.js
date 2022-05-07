import {React, useContext} from 'react'
import { CartContext } from '../App';


export default function CartItem({title, quantity, price}) {

  const {Cart, setCart} = useContext(CartContext);

  function remove_item() {
    setCart([2])
  }

  return (
    <div id="Cart_item">
        <div>Title: {title}</div>
        <div>Quantity: {quantity}</div>
        <div>Price each: ${price}</div>
        <button onClick={() => remove_item()}>Delete</button>
    </div>
    )
  }

