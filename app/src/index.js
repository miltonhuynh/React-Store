import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductPage from './Components/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/React-Store" element={<App />}>
          <Route index element={<ProductPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

