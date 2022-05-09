import {React, useState, useContext} from 'react'
import { CartContext } from '../App';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function CartItem({title, quantity, price, image, rerender}) {

  const {Cart, setCart} = useContext(CartContext);
  const [quantity_change, setQuantity_change] = useState(quantity);

  //Rounds dollar amount to 2 decimal places
  price = price.toFixed(2);

  function increase() {
    const index = Cart.findIndex((x) => x.title === title);
    Cart[index].quantity += 1;
    setQuantity_change(Cart[index].quantity);
    rerender();
  }

  function decrease() {
    const index = Cart.findIndex((x) => x.title === title);
    // Prevents user from decreasing quantity below 0
    if(Cart[index].quantity > 0) {
      Cart[index].quantity -= 1;
      setQuantity_change(Cart[index].quantity);
      rerender();
    }
    if(Cart[index].quantity === 0) {
      if(window.confirm("Remove item from cart?") === true ) {
      remove_item();
      }
    }
  }
  
  // Removes current item from cart
  function remove_item() {
    const index = Cart.findIndex((x) => x.title === title);
    let left = Cart.slice(0, index); 
    let right = Cart.slice(index + 1);
    // Combines the 2 arrays without the object containing the item
    setCart([...left, ...right]);
  }

  return (
    <div id="Cart_item">
      <img src={image} id="Cart_image" alt="About item"></img>
      <div id="Cart_title-quantity-price">
        <div id="Cart_title">{title}</div>
        <div id="Cart_quantity">
          Quantity: {quantity_change}
          <div id="Increment_quantity">
            <FontAwesomeIcon className="Increment_icon" icon={faMinus} onClick={() => decrease()}/>
            <FontAwesomeIcon className="Increment_icon" icon={faPlus} onClick={() => increase()} />
          </div>     
        </div>
        <div id="Cart_price">Price each: ${price}</div>
        <FontAwesomeIcon id="Delete_item" icon={faTrash} onClick={() => remove_item()}/>
      </div>
    </div>
    )
  }

