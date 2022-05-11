import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// Renders each item as a separate card
export default function ProductCard({image, title, price, stars, id}) {

  let navigate = useNavigate();

  // Rounds prices to 2 decimal points
  price = price.toFixed(2);

  return (
    // Clicking on a product card will go to that specific item's product details
    <div id="Card_container" onClick={() => navigate(`ProductDetails/${id}`)}>
        <img id="Card_images" src={image} alt="Shows item"></img>
        <div id="Item_title-price">
          <div id="Card_titles">{title}</div>
          <div id="Card_prices">${price}</div>
          <div id="Card_ratings"><FontAwesomeIcon icon={faStar} /> {stars}</div>
        </div>
    </div>
  )
}
