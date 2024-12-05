import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurValue from '../components/about/OurValue'
import Hero from '../components/about/Hero'
import Journal from '../components/about/Journal'

export default function About() {
  return (
    <>
      <Navbar />
      <Hero/>
      <OurValue/>
      <Journal/>
      <Footer />
    </>
  )
}
