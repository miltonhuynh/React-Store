import {React, useCallback} from 'react'
import { useNavigate } from "react-router-dom";


export default function ProductCard({image, title, price, key}) {

  //const navigate = useNavigate();
  //const clicked = useCallback(() => navigate('/React-Store/ProductDetails', {replace: true, id:key}), [navigate]);

  let navigate = useNavigate();

  return (
    <div id="Card_container" onClick={ () => navigate('ProductDetails')}>
        <div id="Card_titles">{title}</div>
        <img id="Card_images" src={image} alt="Shows item"></img>
        <div id="Card_prices">${price}</div>
    </div>
  )
}
