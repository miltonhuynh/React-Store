import React from 'react'

export default function ProductCard({image,title,price}) {
    console.log(image);
  return (
    <div id="Card_container">
        <div>{title}</div>
        <img id="card_images" src={image}></img>
        <div>${price}</div>
    </div>
  )
}
