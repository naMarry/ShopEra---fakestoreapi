import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../../assets/images/assets'

export default function Herobanner() {
    return (
        <section className="py-3" style={{backgroundColor: '#f3f3f3'}}>
            <div class="container">
                <div class="row py-4 align-items-center">
                    <div className="col-12 col-sm-6">
                        <h1>Best Quality Products</h1>
                        <p>Lorem ipsum dolor sit amet consect abore magnam, nobis corrupti qui ea facere dolor!</p>
                        <Link to='/shops' className='py-2 px-3 text-decoration-none mt-2 rounded-3 bg-dark text-white'>Buy Now</Link>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-center">
                        <img src={assets.homeHero} alt="" className='object-fit-cover rounded-circle' style={{width: '250px', height: '250px'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
