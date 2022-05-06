import './App.css';
import HeaderFooter from './Components/HeaderFooter';
import {Outlet} from 'react-router-dom';
import {useState, createContext} from 'react';


export const CartContext = createContext();

function App() {
  
  const [Cart, setCart] = useState([]);

  //https://www.youtube.com/watch?v=3yrMcx02jXs

  return (
    <HeaderFooter>
      <CartContext.Provider value={{Cart, setCart}}>
        <div id="List_container">
          <Outlet/>
        </div>
      </CartContext.Provider>
    </HeaderFooter>
  );
}

export default App;
