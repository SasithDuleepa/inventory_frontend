import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable';

import './raw_stock_report.css'

import logoImage from './../../../logo.jpg';


export default function Raw_stock_report() {
  const[data,setData]= useState([])
  const get_data = async() =>{
    const res = await Axios.get('http://localhost:8080/raw_input/raw_avalable')
    console.log(res.data)
    setData(res.data)
  
  }
  useEffect(()=>{ get_data()},[])

  const Create_pdf = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    const currentDate = new Date().toLocaleDateString('en-US');
  
    const companyName = 'Your Company Name';
    const reportTitle = 'Raw Stock Level Report';

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
      'Raw Material Name',
      'Batch Number',
      'Purchase Order Number',
      'Quantity',
      'Availability Status',
      'Unit of Measure',
      'Date of Receipt',
      'Expiry Date',
      'Supplier Name',
      'Responsible Person',
      'Remarks',
    ];
  
    const tableData = data.map((data) => [
      data.raw_material_name,
      data.batch_number,
      data.purchase_order_number,
      data.quantity,
      data.availability_status,
      data.unit_of_measure,
      data.date_of_receipt,
      data.expiry_date,
      data.supplier_name,
      data.responsible_person,
      data.remarks,
    ]);
  
    const tableWidth = 580;
    const startX = (doc.internal.pageSize.getWidth() - tableWidth) ;
  
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
        0: { cellWidth: 40 },
        1: { cellWidth: 50 },
        2: { cellWidth: 50 },
        3: { cellWidth: 30 },
        4: { cellWidth: 40 },
        5: { cellWidth: 35 },
        6: { cellWidth: 50 },
        7: { cellWidth: 50 },
        8: { cellWidth: 50 },
        9: { cellWidth: 50 },
        10: { cellWidth: 80 },
      },
      margin: { left: startX, right: startX },
    });
  
    doc.save('product_report.pdf');
  };
  return (
    <div>
      <h1 className='raw_data_acc_name'>Raw Stock Level Report</h1>

      <div className='raw_data_table'>
      <table>
             <thead>
  <tr>
    <th>raw_material_name</th>
    <th>batch_number</th>
    <th>purchase_order_number</th>
    <th>quantity</th>
    {/* <th>availability_status</th> */}
    <th>unit_of_measure</th>
    <th>date_of_receipt</th>
    <th>expiry_date</th>
    <th>supplier_name</th>
    <th>responsible_person</th>
    <th>remarks</th>
  </tr>
</thead>
             
<tbody>
  {data.map((data) => (
    <tr key={data.inventory_id}>
      <td>{data.raw_material_name}</td>
      <td>{data.batch_number}</td>
      <td>{data.purchase_order_number}</td>
      <td>{data.quantity}</td>
      {/* <td>{data.availability_status}</td> */}
      <td>{data.unit_of_measure}</td>
      <td>{data.date_of_receipt}</td>
      <td>{data.expiry_date}</td>
      <td>{data.supplier_name}</td>
      <td>{data.responsible_person}</td>
      <td>{data.remarks}</td>
    </tr>
  ))}
</tbody>
             </table>
      </div>
      <a className='raw_data_acc_name_pdf' onClick={Create_pdf}   download><span>Download</span><span>PDF</span></a>
    </div>
  )
}
