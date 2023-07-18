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
        <h1 className="text-center">Input Stock View</h1>
        <div >
          <div className="table_responsive">
            <table>
              <thead>
                <tr>
                 
                <th>Raw Input Name</th>
                <th>Supplier Name</th>
                <th>Purchase Order Number</th>
                <th>Quantity</th>
                <th>Unit of Measure</th>
                <th>Unit Price</th>
                <th>Batch Number</th>
                <th>Date of Receipt</th>
                <th>Expiry Date</th>
                <th>Location</th>
                <th>Responsible Person</th>
                <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {Raw_input_data.map((item)=>(
                  <tr key={item.idRaw_inputs}>
                    <td>{item.raw_material_name}</td>
                  <td>{item.supplier_name}</td>
                  <td>{item.purchase_order_number}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit_of_measure}</td>
                  <td>{item.unit_price}</td>
                  <td>{item.batch_number}</td>
                  <td>{item.date_of_receipt}</td>
                  <td>{item.expiry_date}</td>
                  <td>{item.location}</td>
                  <td>{item.responsible_person}</td>
                  <td>{item.remarks}</td>
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
