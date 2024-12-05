import React from 'react'
import assets from '../assets/images/assets';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <section style={{ backgroundColor: '#f3f3f3', height: "fit-content" }}>
            <div className="container" style={{ padding: "40px 0" }}>
                <div className="row align-items-center p-3 rounded-4" style={{ backgroundColor: '#fff' }}>
                    <div className="col-12 col-md-6">
                        <form>
                            <div className='mb-5'>
                                <h1 className='text-center'>Sign Up</h1>
                                <p className='text-center'>Please complete the information below before enter ShopEra</p>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='mb-1'>
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <p>already have an account? <Link to='/login'>Log In</Link></p>
                            <Link to='/login' type="submit" class="mt-5 w-100 btn btn-dark text-white">Submit</Link>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 p-0 d-none d-md-flex justify-content-end">
                        <img src={assets.login} alt="" className='object-fit-cover  rounded-3' style={{ width: '90%', height: "590px" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
