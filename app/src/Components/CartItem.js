import {React, useContext} from 'react'
import { CartContext } from '../App';

export default function CartItem({title, quantity, setQuantity, price, image}) {

  const {Cart, setCart} = useContext(CartContext);

  function increase_quantity() {
    setQuantity(5);
  }

  function decrease_quantity() {
    setQuantity(10);

  }

  function remove_item() {
    const index = Cart.findIndex((x) => x.title === title);
    let temp = Cart;
    let left = temp.slice(0, index); 
    let right = temp.slice(index + 1);
    setCart([...left, ...right]);
  }

  return (
    <div id="Cart_item">
      <img src={image} id="Details_image" alt="About item"></img>
      <div id="Cart_title-quantity-price">
        <div>Title: {title}</div>
        <div>Quantity: {quantity}</div>
        <div>Price each: ${price}</div>
        <button onClick={() => decrease_quantity()}>-</button>
        <button onClick={() => increase_quantity()}>+</button>
        <button onClick={() => remove_item()}>Delete</button>
      </div>
    </div>
    )
  }

