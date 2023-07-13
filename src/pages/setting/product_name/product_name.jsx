import React, { useEffect } from 'react'
import Axios from 'axios'
import './product_name.css'

import Product_view from '../../../components/RawProduct_view/product_view'

export default function Product_name() {

    //set product names
    const[data, setData]=React.useState([])
    const changeHandler=(e)=>{
        setData(e.target.value)
    
    }
    const addProduct_name=async()=>{
        const res = await Axios.post("http://localhost:8080/product_name/save_productname",{product_name:data})
        console.log(res.data)
        getProduct_names()
    
    
    }

    //get product names
    const[product_names,setProduct_names]=React.useState([])
    const getProduct_names=async()=>{
        const res = await Axios.get("http://localhost:8080/product_name/get_all_names")
        setProduct_names(res.data)
    
    }
    useEffect(()=>{
        getProduct_names()
    },[])

    
  return (
    <div>
        <div>
            <h1 className='product_name'> Add Product Name</h1>
            <div className='product_name_container'>
            <div>
                <label className='product_name_label'>enter product name</label>
                <input className='product_name_input' type="text" value={data} onChange={(e)=>changeHandler(e)} placeholder='enter product name'/>
                <button className='product_name_button' onClick={addProduct_name}>add</button>   
            </div>

            </div>
            

        </div>
        <div>
            <h1 className='product_name_'>Product Names</h1>
            <div className='product_name_container_view'>
                {product_names.map((product_name)=>{
                    return (
                        <Product_view name={product_name.product_name}/>
                    )
                
                }
                )}

            </div>
        </div>
    </div>
  )
}
