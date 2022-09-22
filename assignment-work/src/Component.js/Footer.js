import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className='container-fluid bg-danger position-relative p-s bottom-0 start-0'>
                <div className='row '>
                    <div className='col d-flex justify-content-center '>
                        <strong className='mx-5'>2022 © All Rights-
                            Reserved</strong>
                    <Link className="" to="/terms-and-condition">Terms &amp; Conditions</Link >
                    </div>

                </div>
            </div>
            {/*  <div className="g-bg-gray-dark-v1 g-color-white-opacity-0_8 g-py-20 mt-5  " >
                <div className="container absolute-xl-bottom absolute-lg-bottom absolute-sm-bottom absolute-xxl-bottom absolute-md-bottom">
                    <div className="row ">
                        <div className="col-md-8">
                            <div className="" >
                                <small className="d-block g-font-size-default  g-mr-10 g-mb-10 g-mb-0--md">
                                    2022 © All Rights-
                                    Reserved.
                                </small>
                                <ul className="u-list-inline">
                                    <li className="list-inline-item" >
                                        <Link className="" to="/terms-and-condition">Terms &amp; Conditions</Link >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
