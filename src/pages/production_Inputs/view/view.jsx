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
              <th>Production Order Number</th>
              <th>Raw Material Name</th>
              <th>Quantity Used</th>
              <th>Unit of Measure</th>
              <th>Batch Number</th>
              <th>Date Time of Usage</th>
              <th>Production Line</th>
              <th>Responsible Person</th>
              <th>Scrap Waste Quantity</th>
              <th>Remarks</th>
              <th>Quantity Available</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item)=>(
              <tr key={item.idselect_raw_materials}>
                <td>{item.production_order_number}</td>
                <td>{item.raw_material_name}</td>
                <td>{item.quantity_used}</td>
                
                <td>{item.unit_of_measure}</td>
                <td>{item.batch_number}</td>
                <td>{item.date_time_of_usage}</td>
                <td>{item.production_line}</td>
                <td>{item.responsible_person}</td>
                <td>{item.scrap_waste_quantity}</td>
                <td>{item.remarks}</td>
                <td>{item.quantity_available}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='space'></div>
    </div>
  )
}
