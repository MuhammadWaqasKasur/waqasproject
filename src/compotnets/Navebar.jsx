import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css"
import Slider from './Slider';


const Navebar = () => {
    const cart = localStorage.getItem("products")
    const products = JSON.parse(cart)

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <img src="https://zerolifestyle.co/cdn/shop/files/logo.png?v=1676901766&width=250" alt="" className='logo' width="110px" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0" >
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/"} style={{ color: 'white' }} >Home</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/products" style={{color:'white'}}>Products</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link" to="/smartwatches" style={{ color: 'white' }}>SmartWatches</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/register" style={{ color: 'white' }}>Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login" style={{ color: 'white' }}>Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/slider" style={{ color: 'white' }}>Slider</Link>
                            </li>
                            <li class="nav-item">

                                <Link class="nav-link" to="/checkout" style={{ color: 'white' }}><CiShoppingCart color={"white"} fontSize={"20px"} />{products?.length}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navebar
