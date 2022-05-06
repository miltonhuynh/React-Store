import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './Components/ProductPage';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/React-Store" element={<App />}>
          <Route index element={<ProductPage />} />
          <Route path="/React-Store/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/React-Store/Cart" element={<Cart />} />
          <Route path="/React-Store/Checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

