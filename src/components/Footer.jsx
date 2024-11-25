import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/images/assets'

export default function Footer() {
    return (
        <>
            <footer class="py-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-menu">
                                <img src={assets.logo} alt="logo" style={{ width: "100px" }} />
                                <div class="social-links mt-5">
                                    <ul class="d-flex list-unstyled gap-2">
                                        <li>
                                            <Link href="#" class="btn btn-outline-light">
                                                <img src={assets.fb} alt="" className='opacity-75' style={{ width: "20px" }} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" class="btn btn-outline-light">
                                                <img src={assets.telegram} alt="" className='opacity-75' style={{ width: "20px" }} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" class="btn btn-outline-light">
                                                <img src={assets.twitter} alt="" className='opacity-75' style={{ width: "20px" }} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" class="btn btn-outline-light">
                                                <img src={assets.linkedin} alt="" className='opacity-75' style={{ width: "20px" }} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Ultras</h5>
                                <ul class="menu-list list-unstyled">
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">About us</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Conditions </Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Our Journals</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Careers</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Affiliate Programme</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Ultras Press</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Customer Service</h5>
                                <ul class="menu-list list-unstyled">
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">FAQ</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Contact</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Privacy Policy</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Returns & Refunds</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Cookie Guidelines</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Delivery Information</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Customer Service</h5>
                                <ul class="menu-list list-unstyled">
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">FAQ</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Contact</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Privacy Policy</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Returns & Refunds</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Cookie Guidelines</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link href="#" class="nav-link">Delivery Information</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Subscribe Us</h5>
                                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                                <form class="d-flex mt-3 gap-0">
                                    <input class="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" aria-label="Email Address" />
                                    <button class="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            <div id="footer-bottom">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 copyright">
                            <p>© 2023 Foodmart. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 credit-link text-start text-md-end">
                            <p>Free HTML Template by <Link href="https://templatesjungle.com/" className='text-black'>TemplatesJungle</Link> Distributed by <a href="https://themewagon" className='text-black'>ThemeWagon</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
