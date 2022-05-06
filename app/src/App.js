import './App.css';
import HeaderFooter from './Components/HeaderFooter';
import {Outlet} from 'react-router-dom';
import {createContext} from 'react'

function App() {
  
  const Cart = createContext([]);

  return (
    <HeaderFooter>
      <Outlet/>
    </HeaderFooter>
  );
}

export default App;
