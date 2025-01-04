import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import Checkout from './pages/Checkout';
import { ProductProvider } from './context/ProductContext';
import ProductFeature from './pages/ProductFeature';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function App() {
  return (
    <BrowserRouter>
      <PayPalScriptProvider options={{ "client-id": "ATPAxWWXLcJzuRasWo8xbbLipqkgsW50zKONuQmYryoU0TWTD44iiEBPQ6s2bbNFJYvJzgnrtIIyrhp0" }}>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shops' element={<Shop />} />
            <Route path='/feature-pro' element={<ProductFeature />} />
            <Route path='/product/:id' element={<ShopDetail />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </ProductProvider>
      </PayPalScriptProvider>
    </BrowserRouter>
  )
}
