import './App.css';
import HeaderFooter from './Components/HeaderFooter';
import {Outlet} from 'react-router-dom';
import {useState, createContext} from 'react';


export const CartContext = createContext();

function App() {
  
  const [Cart, setCart] = useState([]);

  //https://stackoverflow.com/questions/58936042/pass-context-between-siblings-using-context-in-react

  return (
    <HeaderFooter>
      <CartContext.Provider value={{Cart, setCart}}>
        <Outlet/>
      </CartContext.Provider>
    </HeaderFooter>
  );
}

export default App;
