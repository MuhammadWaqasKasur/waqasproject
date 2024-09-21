import React, {useState,useEffect } from 'react'
import axios from "axios"
import Loader from './Loader'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loader,setLoader]=useState(false);
    const fetchProducts = async () => {
        setLoader(true);
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data);
        setLoader(false)
    }
    useEffect(()=> {
        fetchProducts()
    }, [])

    return (
        <>        {
            loader ? (<Loader/>) :(<div className='d-flex flex-wrap justify-content-evenly gap-4 mt-4'>
                {
                    products.map((item) => {
                        return (
                            <div class="card" style={{width: "18rem"}}>
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <a href="#" class="btn btn-primary">{item.price}</a>
                                </div>
                            </div>
                        )
    })
                }
            </div>)
        }
        </>

        
)}

export default Products
