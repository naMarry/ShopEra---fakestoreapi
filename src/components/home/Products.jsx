import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

export default function Products() {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filterMenClothes = products.filter(pro => pro.category === "men's clothing");
    const filterWomenClothes = products.filter(pro => pro.category === "women's clothing");

    return (
        <section class="py-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bootstrap-tabs product-tabs">
                            <div class="tabs-header d-flex justify-content-between border-bottom my-5">
                                <h3>Trending Products</h3>
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <Link href="#" class="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</Link>
                                        <Link href="#" class="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Men Clothing</Link>
                                        <Link href="#" class="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Women Clothing</Link>
                                    </div>
                                </nav>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                    <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                        {
                                            products.map((pro, index) =>
                                                <div className="col mb-5" key={index}>
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
                                            )}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">
                                    <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                        {
                                            filterMenClothes.map((pro, index) =>
                                                <div className="col mb-5" key={index}>
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
                                            )}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">
                                    <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                        {
                                            filterWomenClothes.map((pro, index) =>
                                                <div className="col mb-5" key={index}>
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
                                            )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
