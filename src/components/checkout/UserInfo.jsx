import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function UserInfo() {
    const { shippingInfo, updateShippingInfo, totalPrice } = useContext(ProductContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateShippingInfo({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(shippingInfo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className='mb-2'>Payment Details</h2>
                <p className='opacity-75'>Lorem ip ia eos nulla ipsa nemo quam eum voluptas perferendis id nam magnam animi, aspernatur dicta alias aut aliquid, eaque incidunt!</p>
                <div className="mt-5">
                    <h4 className='mb-4'>
                        <span className='opacity-75'>Shipping Information</span>
                        <span className='text-danger ms-2 mb-4'>*</span>
                    </h4>
                    <div className="mb-4">
                        <label className="form-label fw-medium">Full Name</label>
                        <input
                            name="fullName"
                            value={shippingInfo.fullName}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-medium">Specific Address</label>
                        <input
                            name="address"
                            value={shippingInfo.address}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                    <div className="row flex-wrap">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">City</label>
                            <input
                                name="city"
                                value={shippingInfo.city}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter city"
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Postcode</label>
                            <input
                                name="postcode"
                                value={shippingInfo.postcode}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter postcode"
                                required
                            />
                        </div>
                    </div>
                    <div className="row flex-wrap">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Country</label>
                            <input
                                name="country"
                                value={shippingInfo.country}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter country"
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">State</label>
                            <input
                                name="state"
                                value={shippingInfo.state}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter state"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="smsUpdate" />
                        <label className="form-check-label" htmlFor="smsUpdate">Please send me SMS shipping updates about my order</label>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className='mb-4'>
                        <span className='opacity-75'>Enter Contact Information</span>
                        <span className='text-danger ms-2 mb-4'>*</span>
                    </h4>
                    <div className="row flex-wrap">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Email Address</label>
                            <input
                                name="email"
                                value={shippingInfo.email}
                                onChange={handleChange}
                                type="email"
                                className="form-control"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-medium">Phone Number</label>
                            <input
                                name="phone"
                                value={shippingInfo.phone}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                    </div>
                </div>
                <p className="mt-5 mb-2">Please complete your shipping information before proceeding with payment!</p>
                <button type="submit" className="btn btn-dark text-white w-100 py-2">Submit</button>
            </form>
        </div>
    );
}
