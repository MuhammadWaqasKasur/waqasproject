import React, {useState,useEffect} from 'react'
import axios from "axios"
import Loader from './Loader'
import { Link } from 'react-router-dom'

const SmartWatches = () => {
  const [smartWatches, setSmartWatches] = useState([])
    const [loader,setLoader]=useState(false);
    const fetchSmartWatches = async () => {
        setLoader(true);
        console.log("Waqas");
        
        const response = await axios.get("https://fakestoreapi.com/products")
        setSmartWatches(response.data);
        setLoader(false)
    }
    useEffect(()=> {
        fetchSmartWatches()
    }, [])
    return (
      <>     
      {/* <Carousel/> */}
      
         {
          loader ? (<Loader/>) :(<div className='d-flex flex-wrap justify-content-evenly gap-4 mt-4'>
              {
                  smartWatches.map((item) => {
                      return (              
                          <div class="card" style={{width: "18rem"}}>
                              <img src={item.image} class="card-img-top" alt="..." />
                              <div class="card-body">
                                  <h5 class="card-title">{item.title}</h5>
                                  <p class="card-text">{item.category}</p>
                                  <Link to={`/products/${item.id}`} class="btn btn-primary">{item.price}</Link>
                              </div>
                          </div>
                      )
  })
              }
          </div>)
      }
      </>

      
)}

export default SmartWatches

