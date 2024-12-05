import React from 'react';
import assets from '../../assets/images/assets';

export default function Hero() {
  return (
    <div style={{ height: "", backgroundColor: "#f3f3f3" }}>
      <div className="container">
        <div className="row py-4 align-items-center">
          <div className='col-6'>
            <p className='mb-0'>best, quality products</p>
            <h1>Shop With Us</h1>
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <img src={assets.shopHero} alt="" className='object-fit-cover rounded-circle' style={{width: '250px', height: '250px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
