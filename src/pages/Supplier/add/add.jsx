import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import './add.css';

export default function Add_supplier() {
    const url ="http://localhost:8080/supplier/Add_supplier"
    const[data,setData]=useState({
        supplier_name:"",
        
        contact_name:"",
        contact_email:"",
        contact_phone:"",
        address:"",
        city:"",
        state:"",
        country:"",
        postal_code:"",
        website:"",
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
            supplier_name:data.supplier_name,
            contact_name:data.contact_name,
            contact_email:data.contact_email,
            contact_phone:data.contact_phone,
            address:data.address,
            city:data.city,
            state:data.state,
            country:data.country,
            postal_code:data.postal_code,
            postal_code:data.postal_code,
            website:data.website,
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
  return (
    <div>
        <h1>Add_supplier</h1>

        <div className='add_supplier'>
            <div>
                <label>supplier_name</label>
                <input className='supplier_name' type="text" id='supplier_name' value={data.supplier_name} onChange={(e)=>handle(e)} placeholder='supplier_name'/>
            </div>
            <div>
                <label>contact_name</label>
                <input className='contact_name' type="text" id='contact_name' value={data.contact_name} onChange={(e)=>handle(e)} placeholder='contact_name'/>
            </div>
            <div>
                <label>contact_phone</label>
                <input className='contact_phone' type="text" id='contact_phone' value={data.contact_phone} onChange={(e)=>handle(e)} placeholder='contact_phone'/>
            </div>
            <div>
                <label>contact_email</label>
                <input className='contact_email' type="text" id='contact_email' value={data.contact_email} onChange={(e)=>handle(e)} placeholder='contact_email'/>
            </div>
            <div>
                <label>address</label>
                <input className='address' type="text" id='address' value={data.address} onChange={(e)=>handle(e)} placeholder='address'/>
            </div>
            <div>
                <label>city</label>
                <input className='city' type="text" id='city' value={data.city} onChange={(e)=>handle(e)} placeholder='city'/>
            </div>
            <div>
                <label>state</label>
                <input className='state' type="text" id='state' value={data.state} onChange={(e)=>handle(e)} placeholder='state'/>
            </div>
            <div>
                <label>country</label>
                <input className='country' type="text" id='country' value={data.country} onChange={(e)=>handle(e)} placeholder='country'/>
            </div>
            <div>
                <label>postal_code</label>
                <input className='postal_code' type="text" id='postal_code' value={data.postal_code} onChange={(e)=>handle(e)} placeholder='postal_code'/>
            </div>
            <div>
                <label>website</label>
                <input className='website' type="text" id='website' value={data.website} onChange={(e)=>handle(e)} placeholder='website'/>
            </div>
            <div>
                <label>remarks</label>
                <input className='remarks' type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
            </div>
            <button onClick={(e)=> submit(e)} className='add_button_'>Add</button>
        </div>



    </div>
  )
}
