import React from 'react';
import assets from '../../assets/images/assets';

export default function Hero() {
    return (
        <section className='position-relative mb-5' style={{ backgroundColor: "#f3f3f3" }}>
            <div className="container-fluid">
                <img src={assets.fb} alt="" className='position-absolute' style={{ width: "25px", top: "60px", left: "300px" }} />
                <img src={assets.telegram} alt="" className='position-absolute' style={{ width: "25px", top: "80px", right: "250px" }} />
                <img src={assets.linkedin} alt="" className='position-absolute' style={{ width: "25px", top: "130px", right: "160px" }} />
                <img src={assets.twitter} alt="" className='position-absolute' style={{ width: "25px", top: "140px", left: "200px" }} />
                <div className="row py-5">
                    <p className='text-center'>ShopEra</p>
                    <h1 className='text-center mt-0 mb-3'>Contact Us for Information</h1>
                    <p className='w-50 text-center mx-auto'>Get in touch with us – we're here to help!</p>
                </div>
            </div>
        </section>
    )
}
