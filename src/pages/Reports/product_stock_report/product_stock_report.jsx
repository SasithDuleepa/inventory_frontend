import React from 'react'
import Axios from 'axios';

import { useEffect } from 'react';
import jsPDF from 'jspdf'
import 'jspdf-autotable';

import './product_stock_report.css'

import logoImage from './../../../logo.jpg';
export default function Product_stock_report() {
  //grt data
  const [data, setData] = React.useState([]);
  const Getdata =async() =>{
    const res = await Axios.get('http://localhost:8080/products/available_all');
    console.log(res.data);
    setData(res.data);
  }
  useEffect(()=>{
    Getdata();
  },[])

  const Create_pdf = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    const currentDate = new Date().toLocaleDateString('en-US');
  
    const companyName = 'Your Company Name';
    const reportTitle = 'Product Stock Level Report';

    const logoWidth = 120; // Adjust the width of the logo as needed
    const logoHeight = 120; // Adjust the height of the logo as needed

    // Add the logo to the PDF
    doc.addImage(logoImage, 'PNG', 260, 0, logoWidth, logoHeight);
  
    doc.setFontSize(20);
    const companyNameWidth = doc.getStringUnitWidth(companyName) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text(companyName, (doc.internal.pageSize.getWidth() - companyNameWidth) / 2, 120);
    doc.setFontSize(16);
    // const reportTitleWidth = doc.getStringUnitWidth(reportTitle) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text(reportTitle, 60, 160);
    doc.setFontSize(12);
    doc.text(`Date: ${currentDate}`, 550, 160, { align: 'center' });
  
    const tableHeaders = [
      'product name',
      'available quantity',
      'date-time of production',
      'production line',
      'production order number',
      'quantity produced',
      'unit of measure',
      'responsible person',
      'remarks'
    ];
  
    const tableData = data.map((data) => [
      data.product_name,
      data.available_quantity,
      data.date_time_of_production,
      data.production_line,
      data.production_order_number,
      data.quantity_produced,
      data.unit_of_measure,
      data.responsible_person,
      data.remarks
    ]);
  
    const tableWidth = 580;
    const startX = (doc.internal.pageSize.getWidth() - tableWidth) + 40 ;
  
    doc.autoTable({
      startY: 200,
      head: [tableHeaders],
      body: tableData,
      theme: 'grid',
      styles: {
        fontSize: 10,
        halign: 'center',
        valign: 'middle',
        cellPadding: 5,
      },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 50 },
        2: { cellWidth: 50 },
        3: { cellWidth: 60 },
        4: { cellWidth: 50 },
        5: { cellWidth: 50 },
        6: { cellWidth: 50 },
        7: { cellWidth: 50 },
        8: { cellWidth: 70 },
        9: { cellWidth: 50 },
        10: { cellWidth: 80 },
      },
      margin: { left: startX, right: startX },
    });
  
    doc.save('product_report.pdf');
  };
  return (
    <div>
      <h1 className='raw_data_acc_name_'>Product_stock_report</h1>
      <div className='raw_data_acc_name_table'>
        <table className='raw_data_acc_name_table_table_'>
          <thead>
            <th>product Name</th>
            <th>Available Quantity</th>
            <th>Date-Time Of Production</th>
            <th>Production Line</th>
            <th>Production Order Number</th>
            <th>Quantity Produced</th>
            <th>Unit of Measure</th>
            <th>Responsible Person</th>
            <th>Remarks</th>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.available_quantity}</td>
                <td>{item.date_time_of_production}</td>
                <td>{item.production_line}</td>
                
                <td>{item.production_order_number}</td>
                <td>{item.quantity_produced}</td>
                <td>{item.unit_of_measure} </td>
                <td>{item.responsible_person}</td>
                <td>{item.remarks}</td>
                
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      <a className='raw_data_acc_name_pdf' onClick={Create_pdf}   download><span>Download</span><span>PDF</span></a>
    </div>
  )
}
