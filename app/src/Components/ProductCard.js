import { useNavigate } from "react-router-dom";


export default function ProductCard({image, title, price, id}) {

  let navigate = useNavigate();

  return (
    <div id="Card_container" onClick={() => navigate(`ProductDetails/${id}`)}>
        <img id="Card_images" src={image} alt="Shows item"></img>
        <div id="Item_title-price">
          <div id="Card_titles">{title}</div>
          <div id="Card_prices">${price}</div>
        </div>
    </div>
  )
}
