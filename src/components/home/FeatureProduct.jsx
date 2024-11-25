import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import assets from '../../assets/images/assets'

export default function FeatureProduct() {

    const features = [
        { img: assets.ft1, title: "women's clothing", sub: "best women clothes" },
        { img: assets.ft2, title: "men's clothing", sub: "best men clothes" },
        { img: assets.ft3, title: "jewerry", sub: "greate quality" },
        { img: assets.ft4, title: "electronics", sub: "new arrivals products" },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextBtn = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < features.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrevBtn = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : features.length - 1
        );
    };

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Product Features</h2>
                            <div className="d-flex align-items-center">
                                <Link href="#" className="btn-link text-decoration-none">
                                    View All Categories →
                                </Link>
                                <div className="swiper-buttons">
                                    <button onClick={handlePrevBtn} className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                                    <button onClick={handleNextBtn} className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex transition-transform"
                        style={{
                            transform: `translateX(-${currentIndex * 260}px)`, 
                            transition: "transform 0.5s ease",
                        }}>

                        {features.map((feature, index) => (
                            <div className="col-5 me-4" key={index}>
                                <div className="card w-100 mb-3 p-3 rounded-4 shadow border-0">
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img
                                                src={feature.img}
                                                className="object-fit-cover rounded"
                                                alt="Card title"
                                                style={{ width: "200px", height: "150px" }} />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body py-0">
                                                <p className="text-muted mb-0">{feature.sub}</p>
                                                <h5 className="card-title">{feature.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
