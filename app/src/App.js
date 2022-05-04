import './App.css';
import ProductPage from './Components/ProductPage';
import HeaderFooter from './Components/HeaderFooter';
import {Outlet} from 'react-router-dom';


function App() {
  return (
    <HeaderFooter>
      <Outlet/>
    </HeaderFooter>
  );
}

export default App;
