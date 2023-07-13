import React from 'react'
import Axios from 'axios';
import './raw_name.css'
import { useState } from 'react';
import { useEffect } from 'react';

import Raw_view from '../../../components/RawProduct_view/RawProduct_view';

export default function Raw_name() {
    const[data, setData] = useState('');
    const saveData = async() => {
        const res = await Axios.post('http://localhost:8080/raw_material_name/save_raw_material', {raw_name:data})

    }

    const handlechange = (e) => {
        setData(e.target.value)
       
    }




    const[raw_name, setRaw_name] = useState([])
    const get_raw_name = async () => {
        try {
          const res = await Axios.get('http://localhost:8080/raw_material_name/get_raw_names');
          // console.log(res.data);
          setRaw_name(res.data);
        } catch (error) {
          console.error('Error retrieving raw names:', error);
        }
      };
    useEffect(()=>{
        get_raw_name()
    },[])
  return (
    <div>
        <div>
            <h1 className='raw_name_h1'> Add Raw Material Name</h1>
            <div className='raw_name_add'>
            <div>
                <label className='raw_name_label'>enter raw material name</label>
                <input className='raw_name_input' type="text" onChange={(e)=>handlechange(e)} value={data} placeholder='enter raw material name'/>
                <button className='raw_name_button' onClick={saveData}>add</button>
            </div>
            </div>
            
        </div>
        <div>
            <h1 className='raw_name_h1'>Raw Material Names</h1>
           <div className='raw_name_view'>
                {raw_name.map((unit)=>{
            return(
              <Raw_view unit={unit.raw_material}/>
            )
          
          }
          )}
        </div>
        </div>
        
    </div>
  )
}
