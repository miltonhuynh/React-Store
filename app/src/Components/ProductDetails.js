import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHourglass } from '@fortawesome/free-solid-svg-icons'

// Renders specific details for each product
export default function ProductDetails() {
  // Stores product details fetched for specific item
  const [Item, setItem] = useState(null);
  // Stores quantity of item user wants to add to cart
  let [quantity, setQuantity] = useState(1);
  const [isLoading, setisLoading] = useState();
  // Uses params to obtain product ID from router
  let params = useParams();

  // useContext brings in Cart array from App.js, will allow user to add objects "items" to cart
  const {setCart} = useContext(CartContext);

  // Fetches item details about specific product
  useEffect(() => {
      setisLoading(true);
      const fetchData = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
          const data = await response.json();
          setItem(data);
          setisLoading(false);
      }
      fetchData();        
  }, [params.id]);

  let navigate = useNavigate();

  // Let's user add item to cart, creates a new objet in Cart array
  function handleSubmit(event) {
    event.preventDefault();
    const title = Item.title;
    const price = Item.price;
    const image = Item.image;

    setCart(Cart => [...Cart, {title, quantity, setQuantity, price, image}]);
    navigate("../", { replace: true });
}
  // Lets user know if product details is still loading
  if (isLoading === true) {
    return (
      <div id="Loading">
        <div id="Loading_text">Loading Product Details</div>
        <FontAwesomeIcon className="Hourglass" icon={faHourglass} />
      </div>
    )
  // If products details fetched successfully, will display product details and add to cart form 
  } else if(Item != null) {
    return (
      <div id="Details_page">
        {/* Renders details regarding the specific item */}
        <div id="Details_container">
          <img src={Item.image} id="Details_image" alt="About item"></img>
          <div id="Details_title">{Item.title}</div>
          <div id="Details_price">Price: ${Item.price}</div>
          <div id="Details_category">Category: {Item.category}</div>
          <div id="Details_description">Description: {Item.description}</div>
          {/* This form asks the user quantity of the item to add to cart, submit will send value to handleSubmit */}
          <form onSubmit={handleSubmit} id="Quantity_form">
            <label id="Quantity_label" htmlFor="quantity">Quantity: </label>
              <select id="Quantity_selector" name="quantity" onChange = {(event) => setQuantity(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              {/* Submitting form will add specified amount of items to cart, send user back to home page */}
              <button type="submit"><FontAwesomeIcon id="Add-cart-button" icon={faCartPlus} /></button>
              
            </form>
        </div>
      </div>
    )
  }
}