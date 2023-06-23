import React, { useState } from 'react'
import Axios from 'axios';
import './inventoryADD.css';

export default function InventoryADD() {
  const url ="http://localhost:8080/products/save"
  const[data,setData]= useState({
    product_name:"",
    description:"",
    units:"",
    price:"",
    supplier:""

  })

  function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
    
}

const submit = async (e)=>{ 
  e.preventDefault();
  try {
    const resp =await Axios.post(url,{            
      product_name:data.product_name,
      product_description:data.description,
      product_SKU:data.units,
      product_price:data.price,
      product_supplier:data.supplier
  });   
  if(resp.data.error){
    alert(resp.data.message)
  }else{
    alert(resp.data.message)
  }
  }
    
   catch (error) {
    
  }

}
  return (
    <div>
        <h2 className='add_title'>product add</h2>
        <div className='add'>
            <form onSubmit={(e)=> submit(e)}>
              <div className='main_set'>
                <div className='set_1'>
                  <div>
                <label>product name</label>
                <input className='product_name_input' type="text" id='product_name' value={data.product_name} onChange={(e)=>handle(e)} placeholder='name'/>
                </div>
                <div>
                <label>description</label>
                <textarea className='description_input' type="" id='description' value={data.description} onChange={(e)=>handle(e)} placeholder='description'/>
                </div>
                </div>
                
                <div className='set_2'>
                <div>
                <label>Stoke Keeping Units</label>
                <input className='units_input' type="text" id='units' value={data.units} onChange={(e)=>handle(e)} placeholder='units'/>
                </div>
                
                <div>
                <label>Unit price</label>
                <input className='price_input' type="text" id='price' value={data.price} onChange={(e)=>handle(e)} placeholder='price'/>
                </div>
                
                <div>
                <label>supplier</label>
                <input className='supplier_input' type="text" id='supplier' value={data.supplier} onChange={(e)=>handle(e)} placeholder='supplier'/>
                </div>

                </div>
                </div>

                <button className='add_button'>add</button>


            </form>

        </div>
    </div>
  )
}
