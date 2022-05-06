import {React, useContext} from 'react'
import { CartContext } from '../App';


export default function Cart() {

  const {Cart, setCart} = useContext(CartContext);

  return (
    <div id="List_container">
      {Cart}
    </div>
  )
}