import { React, useContext, useState } from 'react'
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

  // Will store the total cost of the cart
  let total = 0;
  const {Cart, setCart} = useContext(CartContext);

  // Variables will hold user input data, for current purposes, this data is not sent anywhere
  const [name, setName] = useState();
  const [shipping, setShipping] = useState();
  const [billing, setBilling] = useState();
  const [credit, setCredit] = useState();

  // Maps over each item in cart, adding together the price of each item
 Cart.map((single) =>
    total += (single.price * single.quantity)
  );

  let navigate = useNavigate();

  function handleSubmit () {
    // Clears cart after user submits form
    setCart([]);
    // No function, used to eliminate unused variable warnings
    console.log(name);
    console.log(shipping);
    console.log(billing);
    console.log(credit);
    // Once user submits form, will go back to home page
    navigate("../", { replace: true });
  }
 
  // Rounds prices to 2 decimal points
  total = total.toFixed(2);

  // Let's user know if Cart is empty instead of just displaying nothing
  if(Cart.length === 0) {
    return (
      <div id="Empty_cart">
        <div id="Empty_cart-text">Cart is empty!</div>
      </div>
    ) } else {
    // If cart is not empty, will render a form
    return (
      <div id="Checkout_container">
        {/* Form contains input and label for Name, Shipping, Billing, Credit Card */}
        <form onSubmit={handleSubmit} id="form">
          <label for="input_name" id="Form_name_label"  class="Form_label">Name: </label>
          <input
              id="input_name"
              class="input_field"
              type="text"
              onChange = {(event) => setName(event.target.value)}
          />
          <label for="input_shipping" class="Form_label">Shipping address: </label>
          <input
              id="input_shipping"
              class="input_field"
              type="text"
              onChange = {(event) => setShipping(event.target.value)}
          />
          <label for="input_billing" class="Form_label">Billing address: </label>
          <input
              id="input_billing"
              class="input_field"
              type="text"
              onChange = {(event) => setBilling(event.target.value)}
          />
          <label for="input_credit" class="Form_label">Credit card: </label>
          <input
              id="input_credit"
              class="input_field"
              type="text"
              onChange = {(event) => setCredit(event.target.value)}
          />
          <div id="Total_cost_checkout">Total cost: ${total}</div>
          {/* Calls function that clears the cart and returns user to home page */}
          <button id="Place_order" type="submit">Place order</button>
        </form>
      </div>
    )
  }
}
