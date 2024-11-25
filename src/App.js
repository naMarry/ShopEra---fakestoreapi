import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { ProductProvider } from './context/ProductContext';

export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/' element={<BlogDetail />} />
          <Route path='/shops' element={<Shop />} />
          <Route path='/' element={<ShopDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}
