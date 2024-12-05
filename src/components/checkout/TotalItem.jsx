import React, { useContext, useEffect, useRef } from 'react'
import { ProductContext } from '../../context/ProductContext'

export default function TotalItem() {
    const {
        selectedProducts,
        selectedItems,
        totalItems,
        totalPrice,
    } = useContext(ProductContext);

    const paypalButtonRef = useRef(null);

    useEffect(() => {
        if (paypalButtonRef.current) return; 

        const loadPaypalScript = () => {
            const script = document.createElement('script');
            script.id = 'paypal-script';
            script.src = "https://www.paypal.com/sdk/js?client-id=AWrn_FyLhMRcK-zuUzMseiQYh5zp0jBd9UD0kmw3Tc7o0Z9iqTjVL1FsUHImcXj9jlP9OWmlfPq_tnyu&currency=USD";
            script.async = true;

            script.onload = () => {
                if (window.paypal && window.paypal.Buttons) {
                    window.paypal.Buttons({
                        createOrder: function (data, actions) {
                            return actions.order.create({
                                purchase_units: [{ amount: { value: totalPrice } }],
                            });
                        },
                        onApprove: function (data, actions) {
                            return actions.order.capture().then(function (details) {
                                alert(`Transaction completed by ${details.payer.name.given_name}`);

                            });
                        },
                        onError: function (err) {
                            console.error("PayPal Button Error:", err);
                        },
                    }).render('#paypal-button-container');
                } else {
                    console.error('PayPal script not fully loaded');
                }
            };
            

            script.onerror = (error) => {
                console.error("Failed to load PayPal script.", error);
            };

            document.body.appendChild(script);
        };

        loadPaypalScript();

        return () => {
            const existingScript = document.getElementById('paypal-script');
            if (existingScript) {
                existingScript.remove();
            }
            paypalButtonRef.current = null; 
        };
    }, [totalPrice]);  



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
                <div className='mt-4'>
                    <div id="paypal-button-container" className="mt-3"></div>
                </div>
            </div>
        </div>
    )
}
