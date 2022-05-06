import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderFooter(props) {
  return (
    <>
      <div id="Navbar">
        <Link to="/React-Store">Home</Link>
        <Link to="/React-Store/Cart">Cart</Link>
        <Link to="/React-Store/Checkout">Checkout</Link>
      </div>
          {props.children}
    </>
  )
}
