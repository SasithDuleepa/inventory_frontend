import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

export default function Add_units() {
    const[unit, setUnit] = useState()
    const handlechange =(e)=>{
        const value =e.target.value
    setUnit(value)
    }
    const AddHandler=()=>{
    const res = Axios.post('http://localhost:8080/setting/add_unit',{units:unit})
    console.log(res.log)
    }
  return (
    <div>
        <h1>add units</h1>

        <input  id='unit' value={unit} onChange={(e)=>handlechange(e)} type='text' placeholder='units'/>
        <button onClick={(e)=>AddHandler(e)}>add</button>
    </div>
  )
}
