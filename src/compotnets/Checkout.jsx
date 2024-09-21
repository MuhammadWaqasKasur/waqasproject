import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';

const Checkout = () => {
    const [cart,setCart]=useState()

    const fetchProducts=()=>{
      const products=localStorage.getItem("products")
      setCart(JSON.parse(products))
    }
    useEffect(()=>{
      fetchProducts();
    },[])
    const columns =[
      {
        name: 'Title',
        selector: row=>row.title,
      },
      {
        name: 'Id',
        selector: row=>row.id,
      },
      {
        name: 'Image',
        selector: row => (
          <img
          src={row.image}
          alt="Image"
          style={{width:'100px', height:'100px'}}
          />
        )
      },
      {
        name: 'Category',
        selector:row=> row.category,
      },
      {
        name: 'Price',
        selector:row=> row.price,
      },
    ]
  return (
    <div>
      {
        cart?.length>0?(
          <DataTable
        columns={columns}
        data={cart}
        />
        ):
        <h1 className='text-center'>No products in Cart Yet</h1>
       
        
      }
    </div>
  )
}

export default Checkout
