import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import Card from '../Card';

export default function Electronics() {

    const { products, loading, error } = useContext(ProductContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filterProduct = products.filter(pro => pro.category === "electronics");


    const handleNextBtn = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < filterProduct.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrevBtn = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : filterProduct.length - 1
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
                                <Link to="#" className="btn-link text-decoration-none">
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

                        {filterProduct.map((pro, index) => (
                            <div className="col-3 me-4">
                                <Card product={pro} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
