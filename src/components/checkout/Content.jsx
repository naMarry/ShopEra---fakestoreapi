import React from 'react';
import UserInfo from './UserInfo';
import TotalItem from './TotalItem';

export default function Content() {
    return (
        <section className='my-5'>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-12 col-lg-7'><UserInfo/></div>
                    <div className='col-12 col-lg-5 mt-5 mt-lg-0'><TotalItem /></div>
                </div>
            </div>
        </section>
    )
}
