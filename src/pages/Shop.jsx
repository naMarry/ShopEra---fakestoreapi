import React from 'react'
import Hero from '../components/shop/Hero'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Body from '../components/shop/Body';

export default function Shop() {
  return (
    <>
      <Navbar />
      <Hero />
      <Body/>
      <Footer/>
    </>
  )
}
