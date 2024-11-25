import React from 'react';
import Navbar from '../components/Navbar';
import Herobanner from '../components/home/Herobanner';
import FeatureProduct from '../components/home/FeatureProduct';
import Products from '../components/home/Products';
import Footer from '../components/Footer';
import Promote from '../components/home/Promote';
import Contact from '../components/home/Contact';
import MoreFeatures from '../components/home/MoreFeatures';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Herobanner/>
      <FeatureProduct/>
      <Products/>
      <Promote/>
      <Contact/>
      <MoreFeatures/>
      <Footer/>
    </>
  )
}
