import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

export default function Text() {

  const {
    singleProduct,
    selectedItems,
    handleDecreaseCart,
    handleIncreaseCart
  } = useContext(ProductContext);

  return (
    <section>
      <div className="d-flex flex-column gap-3">
        <h1>{singleProduct.title}</h1>
        <div className="d-flex">
          <div className="input-group product-qty d-flex align-items-center" style={{ width: "fit-content" }}>
            <span className="input-group-btn">
              <button onClick={() => handleDecreaseCart(singleProduct.id)}
                type="button"
                className="quantity-left-minus btn border border-black btn-number"
                data-type="minus"
              >
                -
              </button>
            </span>
            <span className='mx-2'>{selectedItems[singleProduct.id] || 0}</span>
            <span className="input-group-btn">
              <button onClick={() => handleIncreaseCart(singleProduct.id)}
                type="button"
                className="quantity-right-plus border border-black btn btn-number"
                data-type="plus"
              >
                +
              </button>
            </span>
          </div>
          <Link to="#" className="nav-link ms-2">
            Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon>
          </Link>
        </div>
        <h4>{singleProduct.price}$</h4>
        <p className='opacity-50'>{singleProduct.description}</p>
      </div>
    </section>
  )
}
