import {React, useContext, useState} from 'react'
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

  let total = 0;
  const {Cart, setCart} = useContext(CartContext);
  const [name, setName] = useState();
  const [shipping, setShipping] = useState();
  const [billing, setBilling] = useState();
  const [credit, setCredit] = useState();

 Cart.map((single) =>
    total += (single.price * single.quantity)
  );

  let navigate = useNavigate();

  function handleSubmit () {
    //Clears cart after user submits form
    setCart([]);
    console.log(name);
    console.log(shipping);
    console.log(billing);
    console.log(credit);
    navigate("../", { replace: true });
  }
 

  return (
    <>
      <div>Total cost: ${total}</div>

      <form onSubmit={handleSubmit} id="form">
        <label for="name">Name: </label>
        <input
            id="name"
            type="text"
            onChange = {(event) => setName(event.target.value)}
        />
        <label for="name">Shipping address: </label>
        <input
            id="name"
            type="text"
            onChange = {(event) => setShipping(event.target.value)}
        />
        <label for="name">Billing address: </label>
        <input
            id="name"
            type="text"
            onChange = {(event) => setBilling(event.target.value)}
        />
        <label for="name">Credit card: </label>
        <input
            id="name"
            type="text"
            onChange = {(event) => setCredit(event.target.value)}
        />
        <button type="submit">Add to cart</button>
    </form>
    </>
  )
}
