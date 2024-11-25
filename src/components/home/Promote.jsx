import React from 'react'
import { Link } from 'react-router-dom'

export default function Promote() {
    return (
        <section className="py-5">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <div
                            className="banner-ad bg-danger mb-3"
                            style={{
                                background: "url('https://i.pinimg.com/474x/da/bf/51/dabf51c75c5134d9d5836f8105b2b45f.jpg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right bottom",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="banner-content p-5">
                                <div className="categories fs-3 fw-bold" style={{color: 'pink'}}>Upto 25% Off</div>
                                <h3 className="banner-title text-white">Luxa Men's clothes</h3>
                                <p className='text-white'>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                <Link href="#" className="btn btn-dark text-uppercase">Show Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div
                            className="banner-ad bg-info"
                            style={{
                                background: "url('https://i.pinimg.com/736x/7a/22/d5/7a22d555ca782994392a8e95b38e034f.jpg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right bottom",
                            }}
                        >
                            <div className="banner-content p-5">
                                <div className="categories text-black fs-3 fw-bold" style={{color: 'pink'}}>Upto 25% Off</div>
                                <h3 className="banner-title">Good Quality Jewerry</h3>
                                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                <Link href="#" className="btn btn-dark text-uppercase">Show Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
