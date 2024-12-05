import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function Image() {
    const { singleProduct } = useContext(ProductContext);

    return (
        <section>
            <div className="row">
                <div className='col'>
                    <div><img src={singleProduct.image} className='border border-black rounded-3 p-2' alt="" style={{ width: "80px" }} /></div>
                    <div><img src={singleProduct.image} className='mt-2 border border-black rounded-3 p-2' alt="" style={{ width: "80px" }} /></div>
                </div>
                <div className='col'>
                    <img src={singleProduct.image} alt="" style={{ width: "250px", transform: 'translateX(-150px)' }} />
                </div>
            </div>
        </section>
    )
}
