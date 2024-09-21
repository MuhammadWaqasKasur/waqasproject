import React,{useState} from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const add=()=>{
        setCounter(counter+1)
    }
    const substract=()=>{
        setCounter(counter-1)
    }
    
  return (
    <div className='d-flex gap-2'>
      <button onClick={substract}>-</button>
      <h1>{counter}</h1>
      <button onClick={add}>+</button>
    </div>
  )
} 

export default Counter
