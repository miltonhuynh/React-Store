import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({Items}) {

  const List_Of_Products = Items.map((single) => 
    <ProductCard
      image={single.image}  
      title={single.title}
    />
  );


  return (
    <div>{List_Of_Products}</div>
  )
}
