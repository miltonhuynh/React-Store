import React from 'react'

export default function CartItem({title, quantity}) {
  return (
    <div id="Cart_item">
        <div>Title: {title}</div>
        <div>Quantity: {quantity}</div>
    </div>
    )
  }
