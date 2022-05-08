import {React, useContext} from 'react'
import { CartContext } from '../App';

export default function CartItem({title, quantity, price, image}) {

  const {Cart, setCart} = useContext(CartContext);
  
  function increase_quantity() {
    return null
  }

  function decrease_quantity() {
    return null
  }

  function remove_item() {
    const index = Cart.findIndex((x) => x.title === title);
    let left = Cart.slice(0, index); 
    let right = Cart.slice(index + 1);
    setCart([...left, ...right]);
  }

  return (
    <div id="Cart_item">
      <img src={image} id="Cart_image" alt="About item"></img>
      <div id="Cart_title-quantity-price">
        <div id="Cart_title">Title: {title}</div>
        <div id="Cart_quantity">Quantity: {quantity}</div>
        <div id="Cart_price">Price each: ${price}</div>
        <button onClick={() => decrease_quantity()}>-</button>
        <button onClick={() => increase_quantity()}>+</button>
        <button onClick={() => remove_item()}>Delete</button>
      </div>
    </div>
    )
  }

