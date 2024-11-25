import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';

export default function Jewerry() {

    const { products, loading, error } = useContext(ProductContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filterProduct = products.filter(pro => pro.category === "jewerry");
    return (
        <div>Jewerry</div>
    )
}
