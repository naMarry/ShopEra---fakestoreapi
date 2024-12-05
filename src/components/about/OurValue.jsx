import React from 'react';
import assests from '../../assets/images/assets';

export default function OurValue() {
    return (
        <section className='py-5'>
            <div className="container-fluid">
                <div className="row mt-4 flex-wrap">
                    <div className="col-4 col-lg-4 col-md-12">
                        <div className="card rounded-4 border-0 p-4">
                            <img src={assests.deliver} alt="" style={{ width: '50px' }} />
                            <h4 className='mt-1 mb-3'>Fast Delivery</h4>
                            <p>We know how exciting it is to receive your purchases quickly, which is why we prioritize fast, reliable delivery. With our streamlined shipping process, you can expect your orders to arrive at your doorstep in no time, so you can start enjoying your new products without the wait.</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-12">
                        <div className="card rounded-4 border-0 p-4 bg-dark text-white">
                            <img src={assests.shop} alt="" style={{ width: '50px' }} />
                            <h4 className='mt-1 mb-3'>Quality Products</h4>
                            <p>We believe in offering only the best. Every item in our store is carefully selected to ensure it meets our high standards of quality. Whether you’re looking for everyday essentials or something special, you can trust that our products are built to last and designed to impress.</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-12">
                        <div className="card rounded-4 border-0 p-4">
                            <img src={assests.call} alt="" style={{ width: '50px' }} />
                            <h4 className='mt-1 mb-3'>Customer Support 24/7</h4>
                            <p>Your experience matters to us around the clock. Our customer service team is available 24/7 to assist with any questions, concerns, or support you may need. We’re here to make your shopping experience as smooth and enjoyable as possible, no matter the time of day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
