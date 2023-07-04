import React, { useState } from 'react'
import Axios from 'axios';
import './add.css'
import { useEffect } from 'react';

export default function Add() {
  const[supplier_data,SetSupplier_data] = useState([]);
  const url ="http://localhost:8080/raw_input/save_inputs"
  

  const[data,setData]= useState({
    raw_material_name:"",
    supplier_name:"",
    purchase_order_number:"",
    quantity:"",
    unit_of_measure:"",
    batch_number:"",
    date_of_receipt:"",
    expiry_date:"",
    location:"",
    responsible_person:"",
    remarks:""

  })


  function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
    
}
const submit = async (e)=>{ 
  // e.preventDefault();
  try {
    const resp =await Axios.post(url,{            
      raw_material_name:data.raw_material_name,
      supplier_name:data.supplier_name,
      purchase_order_number:data.purchase_order_number,
      quantity:data.quantity,
      unit_of_measure:data.unit_of_measure,
      batch_number:data.batch_number,
      date_of_receipt:data.date_of_receipt,
      expiry_date:data.expiry_date,
      location:data.location,
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

//get available suppliers
const Supplires = async (e)=>{
  const res =await Axios.get('http://localhost:8080/supplier/Get_all');
  
  SetSupplier_data(res.data);
  

}
useEffect(()=>{
  Get_units();
  Supplires();
  console.log(supplier_data);
}

,[])


const[units,setUnits]= useState([])
const Get_units = async()=>{
   const res = await Axios.get('http://localhost:8080/setting/all_units')
   setUnits(res.data)
}

  return (
    <div className='add_page_raw'>
        <div><h1 className='add_title'>add raw inputs</h1></div>
        <div>
        <div className='main_add'>
          
                <div className='add_raw'>
                <label>raw material name</label>
                <input className='raw_material_name' type="text" id='raw_material_name' value={data.raw_material_name} onChange={(e)=>handle(e)} placeholder='raw_material_name'/>
                </div>    

                <div className='add_raw'>
                <label>supplier_name</label>              
                <select className='supplier_name' id='supplier_name'value={data.supplier_name} onChange={(e)=>handle(e)} required='true'>
                <option>select supplier</option>
                    {supplier_data.map((product, index)=>(
                        <option key={index} value={product.supplier_name}>{product.supplier_name}</option>
                    ))}    
                </select>
             
                </div>            
                
                <div className='add_raw'>
                <label>purchase_order_number</label>
                <input className='purchase_order_number' type="text" id='purchase_order_number' value={data.purchase_order_number} onChange={(e)=>handle(e)} placeholder='purchase_order_number'/>
                </div>
                
                <div className='add_raw'>
                <label>quantity</label>
                <input className='quantity' type="text" id='quantity' value={data.quantity} onChange={(e)=>handle(e)} placeholder='quantity'/>
                </div>

                <div className='add_raw'>
                <label>unit_of_measure</label>
                <select className='unit_of_measure' id='unit_of_measure'value={data.unit_of_measure} onChange={(e)=>handle(e)} required='true'>
                <option>select supplier</option>
                    {units.map((product, index)=>(
                        <option key={index} value={product.unit_name}>{product.unit_name}</option>
                    ))}    
                </select>
                
                </div>

                <div className='add_raw'>
                <label>batch_number</label>
                <input className='batch_number' type="text" id='batch_number' value={data.batch_number} onChange={(e)=>handle(e)} placeholder='batch_number'/>
                </div>

                <div className='add_raw'>
                <label>date_of_receipt</label>
                <input className='date_of_receipt' type="text" id='date_of_receipt' value={data.date_of_receipt} onChange={(e)=>handle(e)} placeholder='date_of_receipt'/>
                </div>

                <div className='add_raw'>
                <label>expiry_date</label>
                <input className='expiry_date' type="text" id='expiry_date' value={data.expiry_date} onChange={(e)=>handle(e)} placeholder='expiry_date'/>
                </div>

                <div className='add_raw'>
                <label >location</label>
                <input className='location' type="text" id='location' value={data.location} onChange={(e)=>handle(e)} placeholder='location'/>
                </div>

                <div className='add_raw'>
                <label>responsible_person</label>
                <input className='responsible_person' type="text" id='responsible_person' value={data.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
                </div>

                <div className='add_raw'>
                <label>remarks</label>
                <input className='remarks' type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
                </div>

                <button onClick={(e)=> submit(e)} className='add_button_'>Add</button>

          </div>
           
            
                {/* <div>
                <label>supplier</label>
               
                <select className='supplier' id='supplier'value={data.supplier} onChange={(e)=>handle(e)} required='true'>
                <option>select supplier</option>
                    {supplier_data.map((product, index)=>(
                        <option key={index} value={product.supplier_name}>{product.supplier_name}</option>
                    ))}    
                </select>
                </div> */}

              

                

         
            
              
                
                 
                
                
               

               
                </div>

              


         <div className='space'></div>
      
        </div>
    
  )
}
