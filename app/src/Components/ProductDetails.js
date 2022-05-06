import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../App';

export default function ProductDetails() {
  const [Item, setItem] = useState(null);
  const [Quantity, setQuantity] = useState();
  const [isLoading, setisLoading] = useState();
  let params = useParams();

  const {setCart} = useContext(CartContext);

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


  function handleSubmit(event) {
    event.preventDefault();
    const title = Item.title;
    setCart(Cart => [...Cart, {title, Quantity}]);
}
  if (isLoading == true) {
    return (
      <div id="Loading">Fetching...</div>
    )
  } else if(Item != null) {
    return (
      <>
      <Link to="/React-Store">Back</Link>
        <div id="Details_container">
          <img src={Item.image} id="Details_image" alt="About item"></img>
          <div id="Details_title">{Item.title}</div>
          <div id="Details_price">${Item.price}</div>
          <div id="Details_price">Category: {Item.category}</div>
          <div id="Details_price">Description: {Item.description}</div>

          <form onSubmit={handleSubmit} id="Quantity_form">
            <label htmlFor="quantity">Quantity:</label>
              <select id="quantity" name="quantity" onChange = {(event) => setQuantity(event.target.value)}>
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
              <button type="submit">Add to cart</button>
            </form>
        </div>
      </>
    )
  }
}