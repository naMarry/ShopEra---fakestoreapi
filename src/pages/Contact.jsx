import React from 'react'
import Hero from '../components/contact/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactform from '../components/contact/Contactform'

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contactform/>
      <Footer />
    </>
  )
}
