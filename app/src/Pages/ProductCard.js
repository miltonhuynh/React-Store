import React from 'react'

export default function ProductCard({image,title,price}) {
    console.log(image);
  return (
    <div id="Card_container">
        <div id="Card_titles">{title}</div>
        <img id="Card_images" src={image}></img>
        <div>${price}</div>
    </div>
  )
}
