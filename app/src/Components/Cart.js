import {React, useState, useContext} from 'react'
import { CartContext } from '../App';
import CartItem from './CartItem';

export default function Cart() {

  let total = 0;
  const {Cart} = useContext(CartContext);
  const [number, setNumber] = useState(0);

  Cart.map((single) =>
    total += (single.price * single.quantity)
  );

  // Will re-render cart page when quantity changes in Cart item to update price
  function force_rerender() {
    setNumber(number + 1);
    console.log(number);
  }

  const Cart_list = Cart.map((single) =>
    <CartItem
      key={single.title}
      title={single.title}
      quantity={single.quantity}
      price={single.price}
      image={single.image}
      rerender={force_rerender}
    />
  );

  //Rounds dollar amount to 2 decimal places
  total = total.toFixed(2);

  if(Cart.length === 0) {
    return (
      <div id="Empty_cart">
        <div id="Empty_cart-text">Cart is empty!</div>
      </div>
    )
  } else {
      return (
        <div id="Cart_container">
          {Cart_list}
          <div id="Total_cost">Cart total: ${total}</div>
        </div>
    )
  }
}
