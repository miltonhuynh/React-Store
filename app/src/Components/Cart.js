import {React, useContext} from 'react'
import { CartContext } from '../App';
import CartItem from './CartItem';


export default function Cart() {

  const {Cart} = useContext(CartContext);

  const Cart_list = Cart.map((single) =>
    <CartItem
      title={single.title}
      quantity={single.Quantity}
    />
  );

  return (
    <div id="List_container">
      {Cart_list}
    </div>
  )
}

/*
const list_of_movies = list.map((single) => 
      <MovieCard
          posterUrl={single.Poster}
          title={single.Title}
          type={single.Type}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          movieID={single.imdbID}
          setmovieID={setmovieID}
      />
    );

  return (
    <div id="MovieList">
      {list_of_movies}
    </div>
  )
  */