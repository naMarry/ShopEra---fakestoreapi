import React from 'react';
import { Link } from 'react-router-dom';

export default function Herobanner() {
    return (
        <section
            className="py-3"
            style={{
                backgroundImage: `url('images/background-pattern.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="banner-blocks">
                            <div class="banner-ad large bg-info block-1">
                                <div class="swiper main-swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="row banner-content p-5" style={{backgroundColor: "#fde2b8"}}>
                                                <div class="content-wrapper col-md-7">
                                                    <div class="categories my-3">100% quality</div>
                                                    <h3 class="display-4">Best Products</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                    <Link href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</Link>
                                                </div>
                                                <div class="img-wrapper col-md-5">
                                                    <img src="images/product-thumb-1.png" alt='' class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="row banner-content p-5">
                                                <div class="content-wrapper col-md-7">
                                                    <div class="categories mb-3 pb-3">100% natural</div>
                                                    <h3 class="banner-title">Fresh Smoothie & Summer Juice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                    <Link href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</Link>
                                                </div>
                                                <div class="img-wrapper col-md-5">
                                                    <img src="images/product-thumb-1.png" alt='' class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="row banner-content p-5">
                                                <div class="content-wrapper col-md-7">
                                                    <div class="categories mb-3 pb-3">100% natural</div>
                                                    <h3 class="banner-title">Heinz Tomato Ketchup</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                    <Link href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</Link>
                                                </div>
                                                <div class="img-wrapper col-md-5">
                                                    <img src="images/product-thumb-2.png" class="img-fluid" alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
