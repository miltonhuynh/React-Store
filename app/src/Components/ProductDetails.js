import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
  const [Item, setItem] = useState(null);
  const [Quantity, setQuantity] = useState();
  let params = useParams();

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
          const data = await response.json();
          setItem(data);
      }
      fetchData();        
  }, [params.id]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Quantity);
}
  
  // Check if fetch has completed successfully before sending data to children
  if(Item != null) {
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