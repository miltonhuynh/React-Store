import React from 'react'
import { useState, useEffect } from 'react'

export default function ProductDetails() {
  const [SingleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://fakestoreapi.com/products/10");
          const data = await response.json();
          setSingleProduct(data);
      }
      fetchData();        
  }, []);
  
  // Check if fetch has completed successfully before sending data to children
  if(SingleProduct != null) {
    return (
      <div>
        {SingleProduct.title}
      </div>
    )
  }
}