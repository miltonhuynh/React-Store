import React from 'react'
import { useState, useEffect } from 'react'
import ProductList from './ProductList';

export default function ProductPage() {
    const [ProductsList, setProductsList] = useState(null);
    const [isLoading, setisLoading] = useState();

    useEffect(() => {
        setisLoading(true);
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductsList(data);
            setisLoading(false);
        }
        fetchData();        
    }, []);
    
    // Check if fetch has completed successfully before sending data to children
    if(isLoading === true) {
      return (
          <div id="Loading">Loading</div>
      ) 
    } else if(ProductsList != null) {
      return (
      <div>
          <ProductList 
            Items={ProductsList}
          />
      </div>
      )
    }
  }
