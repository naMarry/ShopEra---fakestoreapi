import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../../assets/images/assets';

export default function Hero() {
    return (
        <section className='mb-5' style={{ backgroundColor: "#f3f3f3" }}>
            <div className="container">
                <div className="row py-5 align-items-center">
                    <div className="col-6 ">
                        <div className='opacity-75 mb-2'>
                            <Link to='/' className='text-black text-decoration-none'>Home</Link>/
                            <Link to='/checkout' className='text-black text-decoration-none'>Checkout</Link>
                        </div>
                        <h1>Shipping Cart</h1>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <img src={assets.cart} alt="" style={{width: "300px"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
