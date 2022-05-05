import React from 'react'
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";

export default function ProductList({Items}) {


  const List_Of_Products = Items.map((single) => 
    <ProductCard
      key={single.id}
      id={single.id}
      image={single.image}  
      title={single.title}
      price={single.price}
    />
  );


  return (
    <div id="List_container">
      {List_Of_Products}
    </div>
  )
}
