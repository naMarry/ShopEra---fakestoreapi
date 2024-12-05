import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/shop/Hero'
import Products from '../components/product features/Products';

export default function ProductFeature() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Products/>
            <Footer/>
        </>
    )
}
