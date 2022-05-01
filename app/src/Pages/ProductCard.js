import React from 'react'

export default function ProductCard({image,title}) {
    console.log(image);
  return (
    <div>
        <div>{title}</div>
        <img id="card_images" src={image}></img>
    </div>
  )
}
