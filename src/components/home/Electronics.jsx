import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

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
                            <div className="col-3 me-4" key={index}>
                                <div className="product-item card w-100 mb-3 p-3 rounded-4 shadow border-0 position-relative">
                                    <span className="badge bg-success position-absolute m-3">-30%</span>
                                    <Link to="#" className="btn-wishlist position-absolute py-1 px-2 rounded-circle" style={{ top: "10px", right: "10px", backgroundColor: "#f3f3f3", cursor: 'pointer' }}>
                                        <i class="bi bi-heart text-black"></i>
                                    </Link>
                                    <figure>
                                        <Link to="/index.html" title="Product Title">
                                            <img src={pro.image} className="tab-image w-100 object-fit-cover" alt="Product" style={{ height: "280px" }} />
                                        </Link>
                                    </figure>
                                    <h5>{pro.title}</h5>
                                    <span className="qty">1 Unit</span>
                                    <span className="rating">
                                        <i class="bi bi-star-fill text-warning mx-2 mb-1"></i>
                                        4.5
                                    </span>
                                    <h3 className="price">{pro.price}$</h3>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty d-flex align-items-center" style={{ width: "fit-content" }}>
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-left-minus btn border border-black btn-number"
                                                    data-type="minus"
                                                >
                                                    -
                                                </button>
                                            </span>
                                            <span className='mx-2'>1</span>
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-right-plus border border-black btn btn-number"
                                                    data-type="plus"
                                                >
                                                    +
                                                </button>
                                            </span>
                                        </div>
                                        <Link to="#" className="nav-link">
                                            Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon>
                                        </Link>
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
