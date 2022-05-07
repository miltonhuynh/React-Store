import {React, useContext} from 'react'
import { CartContext } from '../App';


export default function CartItem({title, quantity, price}) {

  const {Cart, setCart} = useContext(CartContext);

  //var filtered = someArray.filter(function(el) { return el.Name != "Kristian"; });
  function remove_item() {
    let removed = Cart.filter(function(remove) { return remove.title === title})
    setCart(removed);
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
