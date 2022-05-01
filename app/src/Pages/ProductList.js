import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({Items}) {

  const List_Of_Products = Items.map((single) => 
    <ProductCard
      image={single.image}  
      title={single.title}
      price={single.price}
    />
  );


  return (
    <div id="List_container">{List_Of_Products}</div>
  )
}
