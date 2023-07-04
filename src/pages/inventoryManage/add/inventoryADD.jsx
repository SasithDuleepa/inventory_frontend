import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './inventoryADD.css';

export default function InventoryADD() {
  const [batchNo, setBatchNo] = useState([]);
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

const get_batchNo = async (e)=>{
  const res = await Axios.get('http://localhost:8080/selection/proccessing_batchNo')
 
  setBatchNo(res.data)

}

useEffect(()=>{
  get_batchNo()

},[])
  return (
    <div className='add_inventory'>
        <h2 className='add_title'>product add</h2>
        <div className='add'>
            <form onSubmit={(e)=> submit(e)}>
              <div >
                
                  <div>
                <label>production_order_number</label>
                <input className='production_order_number' type="text" id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)} placeholder='production_order_number'/>
                </div>
                <div>
                <label>product_name</label>
                <input className='product_name' type="text" id='product_name' value={data.product_name} onChange={(e)=>handle(e)} placeholder='product_name'/>
                </div>
                <div>
                <label>quantity_produced</label>
                <input className='quantity_produced' type="number" id='quantity_produced' value={data.quantity_produced} onChange={(e)=>handle(e)} placeholder='quantity_produced'/>
                </div>
                <div>
                <label>unit_of_measure</label>
                <input className='unit_of_measure' type="number" id='unit_of_measure' value={data.unit_of_measure} onChange={(e)=>handle(e)} placeholder='unit_of_measure'/>
                </div>
                <div>
                <label>date_time_of_production</label>
                <input className='date_time_of_production' type="date" id='date_time_of_production' value={data.date_time_of_production} onChange={(e)=>handle(e)} placeholder='date_time_of_production'/>
                </div>
                <div>
                <label>production_line</label>
                <input className='production_line' type="text" id='production_line' value={data.production_line} onChange={(e)=>handle(e)} placeholder='production_line'/>
                </div>
                <div>
                <label>responsible_person</label>
                <input className='responsible_person' type="text" id='responsible_person' value={data.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
                </div>
                <div>
                <label>remarks</label>
                <input className='remarks' type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
                </div>
                
               
                
                <button className='add_button__'>Add</button>

              
                
                </div>

               


            </form>

        </div>
        <div className='space'></div>
    </div>
  )
}
