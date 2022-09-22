import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='position-relative'>
            <nav className="navbar navbar-expand-lg bg-dark position-sticky text-warning">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav    mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-warning" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning" aria-current="page" to="/about">About</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link text-warning" aria-current="page" to="/Products">product list</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning" aria-current="page" to="/AddProduct">Add Product</Link>
                            </li>
                            {/* <button type="button" class="btn btn-primary position-relative">
                                    Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"id='count'> <span class="visually-hidden">unread messages</span></span>
                                </button> */}
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
    )
}
