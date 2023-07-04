import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable';

import './view.css';

export default function Input_stock_view() {
  const[Raw_input_data, setRaw_input_data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get('http://localhost:8080/raw_input/search_all');
        console.log(res.data);
        setRaw_input_data(res.data);
      } catch (error) {
        console.log(error);
      }


      
    }

    fetchData();
  },[])

  
  return (
    <div className='raw_view'>
        <h1 className="text-center">Input_stock_view</h1>
        <div className="container">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                 
                  <th>Raw_input_name</th>
                  <th>Raw_no</th>
                  <th>Raw_input_quantity</th>
                  <th>Raw_input_price</th>
                  <th>total_price</th>
                  <th>Raw_input_date</th>
                  <th>Raw_input_supplier_name</th>
                </tr>
              </thead>
              <tbody>
                {Raw_input_data.map((item)=>(
                  <tr key={item.idRaw_inputs}>
                    <td>{item.input_name}</td>
                    <td>{item.raw_no}</td>
                    <td>{item.input_SKU}</td>
                   
                    <td>{item.input_unit_price}</td>
                    <td>{item.input_SKU*item.input_unit_price}</td>
                    <td>{item.input_date}</td>
                    <td>{item.input_supplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
        <div className='space'></div>
        </div>
  )
}
