import './App.css';
import HeaderFooter from './Components/HeaderFooter';
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';

export const CartContext = createContext();

function App() {
  const [Cart, setCart] = useState([]);
  
  return (
    <HeaderFooter>
      <CartContext.Provider value={{Cart, setCart}}>
        <div id="Page_container">
          <Outlet/>
        </div>
      </CartContext.Provider>
    </HeaderFooter>
  );
}

export default App;
