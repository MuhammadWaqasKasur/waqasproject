import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../compotnets/Loader'
import Counter from '../compotnets/Counter'
import { Link } from 'react-router-dom'   

const ProductDescription = () => {
    const [product,setProduct]=useState()
    const [loader,setLoader]=useState(false);
    const params = useParams();
     const fetchProductDescription= async () =>{
        setLoader(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setProduct(response.data);
        setLoader(false)
    }
    useEffect(()=> {
        fetchProductDescription()
    },[])
    const addToCart=(e)=>{
        e.preventDefault();
        const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
        existingProducts.push(product);
        localStorage.setItem("products", JSON.stringify(existingProducts))
    }    

  return (
    <>     
        {
            loader ? <Loader/> : <div className="contanter">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src={product?.image} width={"200px"} height={"200px"} alt={product?.title}/>
                    </div>
                    <div className="col-lg-6">
                        <h1>{product?.title}</h1>
                        <p>{product?.description}</p>
                        <h3>{product?.price}</h3>
                        <p><b>{product?.category}</b></p>
                        <Counter/><br />
                        <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default ProductDescription
