import React from 'react';
import assets from '../../assets/images/assets';

export default function Journal() {
    return (
        <section className='my-5'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 col-lg-6 col-sm-12">
                        <img src={assets.a1} alt="" className='rounded-4 w-75 object-fit-cover' style={{height: '500px'}} />
                    </div>
                    <div className="col-6 col-lg-6 col-sm-12">
                        <h4 className='mb-3'>Part 1: The Idea</h4>
                        <p>The journey of creating ShopEra began with a simple idea: to offer a curated collection of high-quality products with an unmatched shopping experience. We noticed a gap in the market where customers wanted not just products, but a seamless, enjoyable way to shop online, with fast delivery, customer care, and products they could trust.
                            From brainstorming to finding the right suppliers, we put in countless hours researching, refining our vision, and building relationships with manufacturers who shared our commitment to quality. It wasn’t always easy, but each step forward brought us closer to creating something that we could be proud of—and more importantly, something that would serve our customers well.
                            Stay tuned for the next chapter as we dive into building our website and launching our first product!</p>
                    </div>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-6 col-lg-6 col-sm-12">
                        <h4 className='mb-3'> Part 2: Launching and Growing</h4>
                        <p>Launching ShopEra was a mix of excitement and nerves. After months of planning, designing, and perfecting the online store, it was finally time to share our vision with the world. Our team worked tirelessly to ensure our website was user-friendly, our products were ready to ship, and our customer service was equipped to handle any inquiries.
                            The response from our early customers was overwhelming—seeing our hard work pay off with happy, satisfied shoppers was the fuel we needed to keep going. We focused on continuously improving, adding new products, optimizing the site, and always keeping an ear to the ground for feedback.
                            Now, as we continue to grow, we remain committed to our mission: providing top-tier products, fast delivery, and exceptional customer service. Every milestone is a reminder of how far we've come, and we're just getting started!</p>
                    </div>
                    <div className="col-6 col-lg-6 col-sm-12 d-flex justify-content-end">
                        <img src={assets.a2} alt="" className='rounded-4 w-75 object-fit-cover' style={{height: '500px'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
