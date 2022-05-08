import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({Items}) {


  const List_Of_Products = Items.map((single) => 
    <ProductCard
      key={single.id}
      id={single.id}
      image={single.image}  
      title={single.title}
      price={single.price}
      stars={single.rating.rate}
    />
  );
  
  return (
    <div id="List_container">
      {List_Of_Products}
    </div>
  )
}
