import './App.css';
import HeaderFooter from './Components/HeaderFooter';
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';

// Created context in App.js so all children will have access to it
export const CartContext = createContext();

function App() {

  // Created a Cart state which will be passed as a Context
  const [Cart, setCart] = useState([]);
  
  return (
    <HeaderFooter>
      {/* Passes Cart state to children as a context */}
      <CartContext.Provider value={{Cart, setCart}}>
        <div id="Page_container">
          {/* Uses outlet to render all pages inside Header and Footer */}
          <Outlet/>
        </div>
      </CartContext.Provider>
    </HeaderFooter>
  );
}

export default App;
