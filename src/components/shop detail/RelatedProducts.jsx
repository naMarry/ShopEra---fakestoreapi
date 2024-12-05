import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Card from '../Card';

export default function RelatedProducts() {

    const {
        products,
        singleProduct
    } = useContext(ProductContext);

    const filterRelatedPro = products.filter(pro => pro.category === singleProduct?.category).slice(0, 4);

    return (
        <section className='mt-5'>
            <h4 className='mb-3'>Related Products</h4>
            <div className="row">
                {filterRelatedPro.map((product, index) =>
                    <div className="col-12 col-sm-3">
                        <Card product={product} index={index} />
                    </div>
                )}
            </div>
        </section>
    )
}
