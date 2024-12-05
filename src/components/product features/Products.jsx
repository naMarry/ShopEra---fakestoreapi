import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import Card from '../Card';


export default function Products() {

    const { products } = useContext(ProductContext);

    //get which fearure user click on 
    const location = useLocation();
    const { feature } = location.state || {};

    if (!feature) {
        return <div>No feature selected</div>;
    }

    //filter only products that match the category
    const category = feature.title || feature;
    const fileterCategories = products.filter(pro => pro.category === category);

    return (
        <div className='mt-5'>
            <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {
                    fileterCategories.map((product, index) =>
                        <Card product={product} index={index} />
                    )}
            </div>
        </div>
    )
}
