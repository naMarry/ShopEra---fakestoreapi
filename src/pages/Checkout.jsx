import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/checkout/Hero';
import Footer from '../components/Footer';
import Content from '../components/checkout/Content';

export default function Checkout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content/>
      <Footer />
    </>
  )
}
