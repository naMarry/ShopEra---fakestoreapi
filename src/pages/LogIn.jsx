import React from 'react';
import assets from '../assets/images/assets';
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (
        <section style={{ backgroundColor: '#f3f3f3', height: "fit-content" }}>
            <div className="container" style={{ padding: "40px 0" }}>
                <div className="row align-items-center p-3 rounded-4" style={{ backgroundColor: '#fff' }}>
                    <div className="col-12 col-md-6 p-0 d-none d-sm-flex justify-content-start">
                        <img src={assets.login} alt="" className='object-fit-cover  rounded-3' style={{ width: '90%', height: "450px" }} />
                    </div>
                    <div className="col-12 col-md-6">
                        <form>
                            <div className='mb-5'>
                                <h1 className='text-center'>Welcome Back</h1>
                                <p className='text-center'>Please complete the information below before enter ShopEra</p>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='mb-1'>
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <p>don't have an account? <Link to='/signup'>Sign up</Link></p>
                            <Link to='/' type="submit" class="mt-5 w-100 btn btn-dark text-white">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
