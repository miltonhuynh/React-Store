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
      title={single.title}
      quantity={single.quantity}
      price={single.price}
    />
  );



  return (
    <div id="List_container">
      {Cart_list}
      Total of cart: ${total}
    </div>
  )
}
