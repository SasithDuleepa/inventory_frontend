import React, { useEffect } from 'react'
import { useState } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import logoImage from './../../../logo.jpg';

export default function Supplier_wise() {
    //get supplier names
const[supplier_names,set_supplier_names] = useState([])
const get_supplier_names = async() => {
  const res = await Axios.get('http://localhost:8080/supplier/Get_all');
  console.log(res.data);
  set_supplier_names(res.data);
}
useEffect(() => {get_supplier_names();},[])

//
const [supplier_name,set_supplier_name] = useState('')
const supplierName_handler = (e) => {
  set_supplier_name(e.target.value);

}
//get data according to supplier name

const[raw_data_acc_supplier_name,set_raw_data_acc_supplier_name] = useState([])
const get_raw_data_acc_supplier_name = async() => {
  const res = await Axios.get(`http://localhost:8080/raw_input/get_data_accordingTosupplier/?supplier_name=${supplier_name}`);
  // console.log(res.data);
  set_raw_data_acc_supplier_name(res.data);

}
useEffect(() => {get_raw_data_acc_supplier_name();},[supplier_name])

const Create_pdf = () => {
  const doc = new jsPDF('landscape', 'px', 'a4', 'false');
  const currentDate = new Date().toLocaleDateString('en-US');

  const companyName = 'Your Company Name';
  const reportTitle = 'Supplier Wise Report';

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

  const tableData = raw_data_acc_supplier_name.map((data) => [
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
        <h2 className='raw_data_acc_name_h2' >supplier wise input raw report</h2>
        <div className='raw_data_acc_name_div'>
        <label className='raw_data_acc_name_label'>supplier name</label>
          <select value={supplier_name} onChange={(e)=>supplierName_handler(e)}>
            
            <option>select supplier_name</option>
            {supplier_names.map((data, index) => (
              <option key={index} value={data.supplier_namel}>{data.supplier_name}</option>
            ))}
            </select>

        </div>
        <div className='raw_data_acc_name_table'>
        <table>
              <thead>
                <th>Raw Material Name</th>
                <th>Batch Number</th>
                <th>Purchase Order Number</th>
                <th>Quantity</th>
                <th>Availability Status</th>
                <th>Unit of Measure</th>
                <th>Date of Receipt</th>
                <th>Expiry Date</th>
                <th>Supplier Name</th>
                <th>Responsible Person</th>
                <th>Remarks</th>

              </thead>
             
              <tbody>
              {raw_data_acc_supplier_name.map((data)=>(
              <tr key={data.inventory_id}>
                <td>{data.raw_material_name}</td>
                <td>{data.batch_number}</td>
                <td>{data.purchase_order_number}</td>
                <td>{data.quantity}</td>
                <td>{data.availability_status}</td>
                <td>{data.unit_of_measure}</td>
                <td>{data.date_of_receipt}</td>
                <td>{data.expiry_date}</td>
                <td>{data.supplier_name}</td>
                <td>{data.responsible_person}</td>
                <td>{data.remarks}</td>
              </tr>))}

              </tbody>
             </table>
        </div>
        <a className='raw_data_acc_name_pdf' onClick={Create_pdf}   download><span>Download</span><span>PDF</span></a>



    </div>
  )
}
