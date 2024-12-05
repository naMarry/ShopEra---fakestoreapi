import React from 'react';
import assets from '../../assets/images/assets';

export default function Hero() {
    return (
        <section className='position-relative' style={{ backgroundColor: "#f3f3f3" }}>
            <div className="container-fluid">
                <img src={assets.person} alt="" className='position-absolute' style={{width: "30px", top: "60px", left: "300px"}}/>
                <img src={assets.cart2} alt="" className='position-absolute' style={{width: "30px", top: "100px", right: "250px"}}/>
                <img src={assets.bag} alt="" className='position-absolute' style={{width: "30px", top: "150px", left: "200px"}}/>
                <div className="row py-5">
                    <p className='text-center'>ShopEra</p>
                    <h1 className='text-center mt-0 mb-3'>Get to Know Us</h1>
                    <p className='w-50 text-center mx-auto'>Our mission is simple: to offer a seamless shopping experience, bringing you the finest clothes &jewelery at the best prices, all while prioritizing sustainability and community support.</p>
                </div>
            </div>
        </section>
    )
}
