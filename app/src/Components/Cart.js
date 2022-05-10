import { React, useState, useContext } from 'react'
import { CartContext } from '../App';
import CartItem from './CartItem';

// Renders Cart page, items in cart and total price
export default function Cart() {

  let total = 0;
  const {Cart} = useContext(CartContext);
  // Only purpose is to update this page when child "CartItem" quantity changes when force_rerender() called
  const [number, setNumber] = useState(0);

  // Maps over every item in cart, adds up to display total price of cart to user
  Cart.map((single) =>
    total += (single.price * single.quantity)
  );

  // Will re-render cart page when quantity changes in Cart item to update price
  function force_rerender() {
    setNumber(number + 1);
  }

  // Maps over ever item in cart, renders a CartItem which display details for each cart item
  const Cart_list = Cart.map((single) =>
    <CartItem
      key={single.title}
      title={single.title}
      quantity={single.quantity}
      price={single.price}
      image={single.image}
      // Sends a function to CartItem, called on when quantity changes inside child to force re-render in parent
      rerender={force_rerender}
    />
  );

  //Rounds dollar amount to 2 decimal places
  total = total.toFixed(2);

  // Lets user know cart is empty
  if(Cart.length === 0) {
    return (
      <div id="Empty_cart">
        <div id="Empty_cart-text">Cart is empty!</div>
      </div>
    )
  } else {
      return (
        // Renders items in cart and total price of cart
        <div id="Cart_container">
          {Cart_list}
          <div id="Total_cost">Cart total: ${total}</div>
        </div>
    )
  }
}
