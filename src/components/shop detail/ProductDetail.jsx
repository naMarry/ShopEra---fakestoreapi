import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import Text from './Text';
import Image from './Image';
import { ProductContext } from '../../context/ProductContext';
import Navbar from '../Navbar';
import RelatedProducts from './RelatedProducts';
import Footer from '../Footer';

export default function ProductDetail() {
    const { id } = useParams();
    const { singleProduct, getProductById } = useContext(ProductContext);

    useEffect(() => {
        getProductById(Number(id));
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className='mt-5 mb-5 d-flex'>
                    <Link to='/' className='text-decoration-none text-black opacity-50'>Home /</Link>
                    <Link className='text-decoration-none text-black'>Product detail</Link>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-sm-6">
                        {singleProduct ? <Image /> : <div>Product not found</div>}
                    </div>
                    <div className="col-12 col-sm-6">
                        {singleProduct ? <Text /> : <div>Product not found</div>}
                    </div>
                </div>
                <RelatedProducts />
            </div>
            <Footer />
        </>
    )
}
