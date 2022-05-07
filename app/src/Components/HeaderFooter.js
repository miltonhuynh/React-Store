import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HeaderFooter(props) {

  let navigate = useNavigate();
  function goHome () {
    navigate("/React-Store", { replace: true });
  }
  function goCart () {
    navigate("/React-Store/Cart", { replace: true });
  }
  function goCheckout () {
    navigate("/React-Store/Checkout", { replace: true });
  }

  return (
    <>
      <div id="Header">
        <div id="Brand" onClick={goHome}>store name</div>
        <div id="Navbar">
          <div className="Link" onClick={goHome}>Home</div>
          <div className="Link" onClick={goCart}>Cart</div>
          <div className="Link" onClick={goCheckout}>Checkout</div>
        </div>
      </div>
      {props.children}
    </>
  )
}
