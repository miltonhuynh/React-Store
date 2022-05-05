import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ProductDetails() {
  const [SingleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const id = 5;
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          setSingleProduct(data);
      }
      fetchData();        
  }, []);
  
  // Check if fetch has completed successfully before sending data to children
  if(SingleProduct != null) {
    return (
      <div>
        <Link to="/React-Store">Back</Link>
        <div>{SingleProduct.title}</div>
      </div>
    )
  }
}