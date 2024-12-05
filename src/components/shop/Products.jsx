import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Card from '../Card';
import { Link } from 'react-router-dom';

export default function Products() {

    const {
        products
    } = useContext(ProductContext);

    const filterJewelery = products.filter(pro => pro.category === "jewelery");
    const filterMenClothes = products.filter(pro => pro.category === "men's clothing");
    const filterWomenClothes = products.filter(pro => pro.category === "women's clothing");

    return (
        <section>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                    <div class="product-grid row mx-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {
                            products.map((pro, index) =>
                                <Card product={pro} index={index} />
                            )}
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-fruits1" role="tabpanel" aria-labelledby="nav-fruits-tab">
                    <div className="product-grid row mx-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {
                            filterWomenClothes.map((pro, index) =>
                                <Card product={pro} index={index} />
                            )}
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-fruits2" role="tabpanel" aria-labelledby="nav-fruits-tab">
                    <div className="product-grid row mx-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {
                            filterMenClothes.map((pro, index) =>
                                <Card product={pro} index={index} />
                            )}
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">
                    <div className="product-grid row mx-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {
                            filterJewelery.map((pro, index) =>
                                <Card product={pro} index={index} />
                            )}
                    </div>
                </div>

            </div>
            {/* <div className='mt-5 product-grid mx-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                {
                    products.length > 0 ?
                        (products.map((product, index) =>
                            <div className="col">
                                <Card product={product} index={index} />
                            </div>))
                        :
                        (<div class="card" aria-hidden="true">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <Link class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
                            </div>
                        </div>)
                }
            </div> */}
        </section>
    )
}
