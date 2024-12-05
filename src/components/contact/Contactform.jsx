import React from 'react';
import assets from '../../assets/images/assets'

export default function Contactform() {
    return (
        <section className='my-5'>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-6 col-lg-6 col-sm-12'>
                        <h4>Get In Touch</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisic santium cumque.</p>
                        <div className="row my-5">
                            <div className="col-6 d-flex align-items-center mb-4">
                                <div className='bg-dark text-white rounded-4 p-3 me-2'>
                                    <i class="bi bi-telephone"></i>
                                </div>
                                <div>
                                    <h6 className='mb-0'>Phone Number</h6>
                                    <p className='opacity-75 mb-0'>098 788 567</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-center mb-4">
                                <div className='bg-dark text-white rounded-4 p-3 me-2'>
                                    <i class="bi bi-telephone"></i>
                                </div>
                                <div>
                                    <h6 className='mb-0'>Phone Number</h6>
                                    <p className='opacity-75 mb-0'>098 788 567</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <div className='bg-dark text-white rounded-4 p-3 me-2'>
                                    <i class="bi bi-telephone"></i>
                                </div>
                                <div>
                                    <h6 className='mb-0'>Phone Number</h6>
                                    <p className='opacity-75 mb-0'>098 788 567</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <div className='bg-dark text-white rounded-4 p-3 me-2'>
                                    <i class="bi bi-telephone"></i>
                                </div>
                                <div>
                                    <h6 className='mb-0'>Phone Number</h6>
                                    <p className='opacity-75 mb-0'>098 788 567</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <div className="d-flex align-items-center">
                                <h5 className='mb-0'>Social Media : </h5>
                                <div className="d-flex gap-1 ms-2">
                                    <img src={assets.fb} alt="" style={{width: "25px", height: "25px"}}/>
                                    <img src={assets.telegram} alt="" style={{width: "25px", height: "25px"}}/>
                                    <img src={assets.twitter} alt="" style={{width: "25px", height: "25px"}}/>
                                    <img src={assets.linkedin} alt="" style={{width: "25px", height: "25px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className='col-6 col-lg-6 col-sm-12 rounded-4 shadow border-0 p-5 rounded-4'>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="row">
                            <div class="col-6 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="col-6 mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="floatingTextarea2" className='mb-2'>Comments</label>
                            <textarea class="form-control" id="exampleInputPassword1" style={{ height: "100px" }}></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark text-white">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
