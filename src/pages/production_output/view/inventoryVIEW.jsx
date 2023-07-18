import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import './inventoryVIEW.css'

import PDF from './../../../icons/pdf.png';




const InventoryVIEW = () => {

  const[inventoryData,setInventoryData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await Axios.get('http://localhost:8080/products/searchAll');
        console.log(res.data);
        setInventoryData(res.data);
      } catch (error) {
        console.log(error);
      }

    }
    
    fetchdata();
    
  }

  ,[]);
  
  
const Create_pdf = () => {
    var doc = new jsPDF('landscape','px','a4','false');
    doc.setFontSize(20);
    doc.text('Product Report', 10, 20);

    let yOffset = 30;
    // inventoryData.forEach((product, index) => {
    //   const { product_name, product_price } = product;
    //   doc.text(`${index + 1}. ${product_name} - $${product_price}`, 10, yOffset);
    //   yOffset += 10;
    // });
    const tableHeaders = ['Product Name', 'Price'];
    doc.autoTable({
      startY: yOffset,
      head: [tableHeaders],
      body: inventoryData.map(product => [product.product_name, `$${product.product_price}`]),
    });
    
    doc.save('test.pdf');
}

  return (
    <div className='inventory'>
      <h2 className='inventory-view-title'>Products View</h2>
      <div className='inventory-view-container'>
        <div className='inventory-view'>
      <table >
        <thead>
          <tr>
          <th>Production Order Number</th>
          <th>Product Name</th>
          <th>Quantity Produced</th>

          <th> Unit of Measure</th>
          <th>Date Time of Production</th>
          <th>Production Line</th>

          <th>Responsible Person</th>
          <th>Remarks</th>
          
                        
                       
                       
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item.output_id}>
              <td>{item.production_order_number}</td>
              <td>{item.product_name}</td>
              
              <td>{item.quantity_produced}</td>
              <td>{item.unit_of_measure}</td>
              <td>{item.date_time_of_production}</td>
              <td>{item.production_line}</td>
              <td>{item.responsible_person}</td>
              
              <td>{item.remarks}</td>
              
            </tr>
          ))}
          
        </tbody>
      </table>
      </div>
     
      {/* <button onClick={Create_pdf}><img src={PDF} alt="pdf" width="30px" height="30px" style={{marginLeft:"-10px"}}/></button> */}
      </div>
      <div className='space'></div>
    </div>
  );
};

export default InventoryVIEW;
