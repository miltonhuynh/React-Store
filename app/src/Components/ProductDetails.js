import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
  const [Item, setItem] = useState(null);
  let params = useParams();

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
          const data = await response.json();
          setItem(data);
      }
      fetchData();        
  }, []);
  
  // Check if fetch has completed successfully before sending data to children
  if(Item != null) {
    return (
      <>
      <Link to="/React-Store">Back</Link>
        <div id="Details_container">
          <img src={Item.image} id="Details_image"></img>
          <div id="Details_title">{Item.title}</div>
          <div id="Details_price">${Item.price}</div>
          <div id="Details_price">Category: {Item.category}</div>
          <div id="Details_price">Description: {Item.description}</div>
        </div>
      </>
    )
  }
}