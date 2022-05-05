import {React, useCallback} from 'react'
import { useNavigate } from "react-router-dom";


export default function ProductCard({image, title, price, id}) {

  let navigate = useNavigate();

  return (
    <div id="Card_container" onClick={() => navigate(`ProductDetails/${id}`)}>
        <div id="Card_titles">{title}</div>
        <img id="Card_images" src={image} alt="Shows item"></img>
        <div id="Card_prices">${price}</div>
    </div>
  )
}
