import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { useEffect } from 'react';

import './product_input_units.css'

import Unit_view from '../../../components/unit_view/Unit_view';

export default function Product_input_units() {
  
  const [unit_name, setUnit_name]=useState("");
  const changehandler = (e)=>{
     setUnit_name(e.target.value)
  }
  const handlesubmit = async()=>{
    const res = await Axios.post('http://localhost:8080/setting/save_productUnits', {
      units : unit_name
    })
    console.log(res.data);
  }

  //get all products
  const[units,setUnits] = useState([])
  const get_all_units = async()=>{
    const res = await Axios.get("http://localhost:8080/setting/All_productUnits");
    // console.log(res.data);
    setUnits(res.data);
  }
  useEffect(()=>{ get_all_units()},[])
  
  return (
    <div>
      <div >
      <h1 className='product_units_title'>add product units</h1>
        <div className='product_units_container'>
          <div>
          <label>product unit name</label>
        <input className='product_units_input' type="text" placeholder='product unit name' value={unit_name} onChange={(e)=>changehandler(e)}/>
        <button className='product_units_button' onClick={handlesubmit}>add</button>
          </div>
        

        </div>
        
        
      </div>
      <div>
      <h1 className='product_units_title'> Product Units</h1>
      <div className='units_container'>
        {units.map((unit)=>{
          return <Unit_view  unit={unit.unit_name}/>}

        )}
      </div>

      </div>
      
    </div>
  )
}
