import React, { useEffect, useState } from 'react'
import  Axios from 'axios';
import './view.css';

export default function View() {
    const getall_URL = '/search_Raw_materials'
    const[Data, setData] = useState([]);

   

    useEffect(()=>{
      const fetch = async() =>{
        try {
          const res = await Axios.get('http://localhost:8080/production/search_Raw_materials');
          
          setData(res.data)
        } catch (error) {
          console.log(error);
        }
      }
      fetch()
    },[])

    
  return (
    <div className='view_container'>
      <h1 className='view_title'>View</h1>
      <div className='view_table'>
        <table>
          <thead>
            <tr>
              <th>raw_name</th>
              <th>raw_no</th>
              <th>batch no</th>
              <th>date</th>
              <th>qty</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item)=>(
              <tr key={item.idselect_raw_materials}>
                <td>{item.raw_material_name}</td>
                <td>{item.raw_no}</td>
                <td>{item.batch_no}</td>
                <td>{item.date}</td>
                
                <td>{item.qty}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='space'></div>
    </div>
  )
}
