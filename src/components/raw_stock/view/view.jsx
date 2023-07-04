import React, { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'

export default function View() {
    const[data, setData] = useState([])
    const[raw_name, setRaw_name] = useState([""])
    const[stock, setStock] = useState([])

    const get_raw_names = async()=>{
        const res = await Axios.get('http://localhost:8080/selection/raw_names')    
         
        setData(res.data) 
        console.log(data)
      } 

     useEffect(()=>{
        get_raw_names()
     },[]) 

    const getdata = async () => {
        const res = await Axios.get(`http://localhost:8080/selection/raw_stock/?Raw_name='${raw_name}'`);
        const stocklevel = res.data[0]
        const value =stocklevel.total_input_SKU
        setStock(value)
    
    }
    useEffect(() => {
      getdata()
    },[raw_name])

    const handle = (e) => {
        setRaw_name(e.target.value)
        
        
    
    }
  return (
    <div>
        <h3> select raw material name</h3>
        <div>
                <label>select raw </label>       
                <select className='supplier' id='raw_no'value={raw_name} onChange={(e)=>handle(e)} required='true'>
                <option>select raw no</option>
                    {data.map((product, index)=>(
                        <option key={index} value={product.input_name}>{product.input_name}</option>
                    ))}    
                </select>
                </div>
                <div>{stock}</div>
    </div>
  )
}
