import {React, useContext} from 'react'
import { CartContext } from '../App';
import CartItem from './CartItem';

export default function Cart() {

  let total = 0;

  const {Cart} = useContext(CartContext);

  Cart.map((single) =>
    total += (single.price * single.quantity)
  );


  const Cart_list = Cart.map((single) =>
    <CartItem
      key={single.title}
      title={single.title}
      quantity={single.quantity}
      price={single.price}
      image={single.image}
    />
  );

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
          Total of cart: ${total}
        </div>
    )
  }
}
