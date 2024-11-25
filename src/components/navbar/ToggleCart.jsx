import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext'

export default function ToggleCart() {
    const {
        selectedItems,
        selectedProducts,
        handleDecreaseCart,
        handleIncreaseCart,
        handleRemoveCart,
        totalItems,
        totalPrice,
    } = useContext(ProductContext);

    return (
        <div class="order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="">Your cart</span>
                <span class="badge rounded-pill text-black" style={{ backgroundColor: "#f3f3f3" }}>{totalItems}</span>
            </h4>

            {selectedProducts.map((product, index) =>
                <ul class="list-group mb-3" key={index}>
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div className='d-flex align-items-center'>
                            <img src={product.image} alt="" className='rounded-3 object-fit-cover' style={{ width: "100px", height: "100px" }} />
                            <h6 class="my-0 text-black w-50 ms-2">{product.title}</h6>
                        </div>
                        <div className='d-flex flex-column justify-content-between align-items-end'>
                            <div class="text-body-secondary">{product.price}$</div>
                            <div className="d-flex align-items-center justify-content-between" style={{ transform: "translateX(20px)" }}>
                                <span className="input-group-btn">
                                    <button onClick={() => handleDecreaseCart(product.id)}
                                        type="button"
                                        className="quantity-left-minus btn btn-number"
                                        data-type="minus"
                                    >
                                        -
                                    </button>
                                </span>
                                <span className='mx-2'>{selectedItems[product.id]}</span>
                                <span className="input-group-btn">
                                    <button onClick={() => handleIncreaseCart(product.id)}
                                        type="button"
                                        className="quantity-right-plus btn btn-number"
                                        data-type="plus"
                                    >
                                        +
                                    </button>
                                </span>
                            </div>
                            <div onClick={() => handleRemoveCart(product.id)} className='text-black d-flex align-items-center justify-content-center rounded-circle p-2' style={{ backgroundColor: "#f3f3f3", width: "fit-content", cursor: "pointer" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
            )}

            <h5 class="d-flex pt-5 pb-2 justify-content-between align-items-center mb-3">
                <span class="">Total Price: </span>
                <span>{totalPrice}$</span>
            </h5>

            <button class="w-100 btn btn-lg" style={{ backgroundColor: "#fde2b8" }} type="submit">Continue to checkout</button>
        </div>
    )
}
