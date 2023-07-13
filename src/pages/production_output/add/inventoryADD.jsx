import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './inventoryADD.css';

export default function InventoryADD() {
  
  const url ="http://localhost:8080/products/save"
  const[data,setData]= useState({
    production_order_number:"",
    product_name:"",
    quantity_produced:"",
    unit_of_measure:"",
    date_time_of_production:"",
    production_line:"",
    responsible_person:"",
    remarks:""

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
      production_order_number:data.production_order_number,
    product_name:data.product_name,
    quantity_produced:data.quantity_produced,
    unit_of_measure:data.unit_of_measure,
    date_time_of_production:data.date_time_of_production,
    production_line:data.production_line,
    responsible_person:data.responsible_person,
    remarks:data.remarks
      
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
const [order_no, setOrder_no] = useState([]);
const production_order_numberNo = async (e)=>{
  const res = await Axios.get('http://localhost:8080/production/get_pending')
  // console.log(res.data)
  setOrder_no(res.data)

}

useEffect(()=>{
  
production_order_numberNo();
},[])

// set product names
const [product_name, setProduct_name] = useState([]);
const Product_Name = async (e)=>{
  const res = await Axios.get('http://localhost:8080/product_name/get_all_names')
  // console.log(res.data)
  setProduct_name(res.data)

}
useEffect(()=>{
  
  Product_Name();

  },[])

//set unit of measure
const [measur_unit, setMeasure_unit] = useState([])
const Units = async (e)=>{
  const res = await Axios.get(`http://localhost:8080/setting/All_productUnits`)
  setMeasure_unit(res.data)

  
}  
useEffect(()=>{
  
  Units();

  },[data.product_name])
  return (
    <div className='add_inventory'>
      <div className='space'></div>
      <h1 className='add_title'>product add</h1>
        
        <div className='add'>

        
            <form onSubmit={(e)=> submit(e)}>
              <div >
                <div className='set_1'>
                <div>
                <label>production_order_number</label>
                <select className='production_order_number' id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)}>
                  <option value="">select production_order_number</option>
                  {order_no.map((order_no, index)=>{
                    return(
                      <option key={index} value={order_no.production_order_number}>{order_no.production_order_number}</option>
                    )
                  }
                  )}
                </select>
               
                </div>
                <div>
                <label>product_name</label>
                <select className='' id='product_name' value={data.product_name} onChange={(e)=>handle(e)}>
                  <option value="">select product_name</option>
                  {product_name.map((product_name, index)=>{
                    return(
                      <option key={index} value={product_name.product_name}>{product_name.product_name}</option>
                    )
                  }
                  )}
                  </select>
                
                </div>
                </div>
                <div className='set_2'>
                <div>
                <label>quantity_produced</label>
                <input className='quantity_produced' type="number" id='quantity_produced' value={data.quantity_produced} onChange={(e)=>handle(e)} placeholder='quantity_produced'/>
                </div>
                <div>
                <label>unit_of_measure</label>
                <select  className='unit_of_measure'  id='unit_of_measure' value={data.unit_of_measure} onChange={(e)=>handle(e)}>
                  <option>select unit of measure</option>
                  {measur_unit.map((unit,index)=>{
                    return(
                      <option ket={index} value={unit.unit_name}>{unit.unit_name}</option>
                    )
                  })}
                </select>
                {/* <input className='unit_of_measure' type="text" id='unit_of_measure' value={data.unit_of_measure} onChange={(e)=>handle(e)} placeholder='unit_of_measure'/> */}
                </div>
                </div>
                <div className='set_3'>
                <div>
                <label>date_time_of_production</label>
                <input className='date_time_of_production' type="date" id='date_time_of_production' value={data.date_time_of_production} onChange={(e)=>handle(e)} placeholder='date_time_of_production'/>
                </div>
                <div>
                <label>production_line</label>
                <input className='production_line' type="text" id='production_line' value={data.production_line} onChange={(e)=>handle(e)} placeholder='production_line'/>
                </div>
                </div>
                <div className='set_4'>
                <div>
                <label>responsible_person</label>
                <input className='responsible_person' type="text" id='responsible_person' value={data.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
                </div>
                <div>
                <label>remarks</label>
                <input  type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
                </div>
                </div>
                
                  
                
                
                
                
               
                
                <button className='add_button__'>Add</button>

              
                
                </div>

               


            </form>

        </div>
        <div className='space'></div>
    </div>
  )
}
