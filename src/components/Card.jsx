import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext'

export default function Card({ product, index }) {
    const {
        selectedItems,
        handleDecreaseCart,
        handleIncreaseCart
    } = useContext(ProductContext);

    return (
        <div className="col" key={index}>
            <div className="product-item card w-100 mb-3 p-3 rounded-4 shadow border-0 position-relative">
                <span className="badge bg-success position-absolute m-3">-30%</span>
                <Link to="#" className="btn-wishlist position-absolute py-1 px-2 rounded-circle" style={{ top: "10px", right: "10px", backgroundColor: "#f3f3f3", cursor: 'pointer' }}>
                    <i class="bi bi-heart text-black"></i>
                </Link>
                <figure>
                    <Link to="/index.html" title="Product Title">
                        <img src={product.image} className="tab-image w-100 object-fit-cover" alt="Product" style={{ height: "280px" }} />
                    </Link>
                </figure>
                <h5>{product.title}</h5>
                <span className="qty">1 Unit</span>
                <span className="rating">
                    <i class="bi bi-star-fill text-warning mx-2 mb-1"></i>
                    4.5
                </span>
                <h3 className="price">{product.price}$</h3>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty d-flex align-items-center" style={{ width: "fit-content" }}>
                        <span className="input-group-btn">
                            <button onClick={() => handleDecreaseCart(product.id)}
                                type="button"
                                className="quantity-left-minus btn border border-black btn-number"
                                data-type="minus"
                            >
                                -
                            </button>
                        </span>
                        <span className='mx-2'>{selectedItems[product.id]}</span>
                        <span className="input-group-btn">
                            <button onClick={() => handleIncreaseCart(product.id)}
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
    )
}
