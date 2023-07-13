import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import './Raw_units.css'
import { useEffect } from 'react';


import Unit_view from '../../../components/unit_view/Unit_view';

export default function Raw_units() {
    const[unit, setUnit] = useState()
    const handlechange =(e)=>{
        const value =e.target.value
    setUnit(value)
    }
    const AddHandler=()=>{
    const res = Axios.post('http://localhost:8080/setting/add_unit',{units:unit})
    // console.log(res.log)
    }


 //get all raw units
 const[units, setUnits] = useState([])
 const view_unit =async()=>{
   const res =await Axios.get('http://localhost:8080/setting/all_units')
  //  console.log(res.data)
   setUnits(res.data)
 }  
 useEffect(()=>{ view_unit()},[]) 
  return (
    <div>
        <h1 className='add_unit_title'>Add Raw Units</h1>
        <div className='add_unit_container'>
          <div>
             <label className='add_unit_label'>enter unit name</label>
             <input className='add_unit_input'  id='unit' value={unit} onChange={(e)=>handlechange(e)} type='text' placeholder='units'/>
             <button className='add_unit_btn' onClick={(e)=>AddHandler(e)}>Add</button>
          </div>
        </div>

        <h1 className='view_unit_title'>View Raw units</h1>
        <div className='view_unit_container'>
          {units.map((unit)=>{
            return(
              <Unit_view unit={unit.unit_name}/>
            )
          
          }
          )}


           
        </div>

        

        
    </div>
  )
}
