import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

export default function SortNav() {

    return (
        <div class="container-fluid mt-2">
            <div class="row">
                <div class="d-flex  justify-content-start justify-content-sm-between align-items-center">
                    <div class="main-menu d-flex navbar navbar-expand-lg w-100">

                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header justify-content-center">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body d-flex justify-content-between align-items-start">
                                    <div class="tabs-header d-flex justify-content-between border-bottom mb-5">
                                        <nav>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <Link href="#" class="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</Link>
                                                <Link href="#" class="nav-link text-uppercase fs-6" id="nav-fruit-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits1">Women Clothing</Link>
                                                <Link href="#" class="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits2">Men Clothing</Link>
                                                <Link href="#" class="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Jewelery</Link>
                                            </div>
                                        </nav>
                                    </div>

                                <select class="filter-categories border-0 mb-0">
                                    <option>Shop by Price</option>
                                    <option>50 - 200</option>
                                    <option>200 - 500</option>
                                    <option>500 - 1000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="row">
                <div class="col-md-12">
                    <div class="bootstrap-tabs product-tabs">
                        <div class="tabs-header d-flex justify-content-between border-bottom my-5">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <Link href="#" class="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</Link>
                                    <Link href="#" class="nav-link text-uppercase fs-6" id="nav-fruit-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits1">Women Clothing</Link>
                                    <Link href="#" class="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits2">Men Clothing</Link>
                                    <Link href="#" class="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Jewelery</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
