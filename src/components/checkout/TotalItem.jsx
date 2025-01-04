import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function TotalItem() {
    const {
        resetOrder,
        selectedProducts,
        selectedItems,
        totalItems,
        totalPrice,
    } = useContext(ProductContext);

    return (
        <div>
            <p className='mb-3 d-flex justify-content-end'>Summery Order</p>
            <div >
                <ul className='d-flex flex-column gap-3 rounded-4 p-4 shadow border-0' style={{ backgroundColor: '#f3f3f3' }}>
                    {selectedProducts.length > 0 ?
                        selectedProducts.map((product, index) =>
                            <li className='d-flex'>
                                <div className='me-3'>
                                    <img src={product.image} alt="" className='rounded-3 object-fit-cover' style={{ width: "100px", height: "100px" }} />
                                </div>
                                <div>
                                    <h6>{product.title}</h6>
                                    <p className='opacity-75'>Items: {totalItems}</p>
                                    <p >Total: {product.price * selectedItems[product.id]}$</p>
                                </div>
                            </li>
                        ) :
                        (<p className='text-center'>no items selectd</p>)
                    }
                </ul>
                <div className='d-flex justify-content-between mt-3'>
                    <h4>Total:</h4>
                    <h4>{totalPrice}$</h4>
                </div>
                <div>
                    <div>
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            description: "Total Order",
                                            value: totalPrice,
                                        },
                                    }],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    alert(`Transaction completed by ${details.payer.name.given_name}`);
                                    console.log(details);

                                    //reset everything
                                    resetOrder();
                                });
                            }}
                            onError={(err) => {
                                console.error("PayPal Checkout Error", err);
                                alert("There was an error processing the payment. Please try again.");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
