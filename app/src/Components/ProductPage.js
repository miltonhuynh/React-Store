import React from 'react'
import { useState, useEffect } from 'react'
import ProductList from './ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-solid-svg-icons'

// Renders container for list of products, fetches from API and sends to Products list
export default function ProductPage() {
    const [ProductsList, setProductsList] = useState(null);
    const [isLoading, setisLoading] = useState();

    useEffect(() => {
        // Will render a loading element until fetch is complete
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
          <div id="Loading">
            <div id="Loading_text">Loading Products</div>
            <FontAwesomeIcon className="Hourglass" icon={faHourglass} />
          </div>
      ) 
    } else if(ProductsList != null) {
      return (
      <div>
          {/* Sends fetched data to Product List to render each item as a prop */}
          <ProductList 
            Items={ProductsList}
          />
      </div>
      )
    }
  }
