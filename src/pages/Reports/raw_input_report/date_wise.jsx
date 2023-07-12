import Axios from 'axios'
import React, { useState } from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import logoImage from './../../../logo.jpg';

export default function Date_wise() {
  const[data, setdata] = useState({
    start_date:'',
    end_date:''
  })
  const handlechange = (e) =>{
    setdata({...data,[e.target.id]:e.target.value})
  }
  const[resdata, setResdata] = useState([])
  const handlesubmit = async() =>{
    const res = await Axios.get(`http://localhost:8080/raw_input/get_data_accordingToDate/?start_date=${data.start_date}&end_date=${data.end_date}`)
    // console.log(res.data)
    setResdata(res.data)
  }

  const Create_pdf = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    const currentDate = new Date().toLocaleDateString('en-US');
  
    const companyName = 'Your Company Name';
    const reportTitle = 'Date Wise Report';

    const logoWidth = 120; // Adjust the width of the logo as needed
    const logoHeight = 120; // Adjust the height of the logo as needed

    // Add the logo to the PDF
    doc.addImage(logoImage, 'PNG', 260, 0, logoWidth, logoHeight);
  
    doc.setFontSize(20);
    const companyNameWidth = doc.getStringUnitWidth(companyName) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text(companyName, (doc.internal.pageSize.getWidth() - companyNameWidth) / 2, 120);
    doc.setFontSize(16);
    // const reportTitleWidth = doc.getStringUnitWidth(reportTitle) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text(reportTitle, 56, 160);
    doc.setFontSize(12);
    doc.text(`Date: ${currentDate}`, 550, 160, { align: 'center' });
    doc.text(`Date range: ${data.start_date} to ${data.end_date}`, 130, 180, { align: 'center' });
  
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
  
    const tableData = resdata.map((data) => [
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
      <h1 className='raw_data_acc_name_h2'>Date wise raw input report</h1>
      <div className='raw_data_acc_name_div'>
        <input className='raw_data_acc_name_input' id='start_date' onChange={(e)=>handlechange(e)} value={data.start_date} type="date" />
        <input  className='raw_data_acc_name_input' id='end_date' onChange={(e)=>handlechange(e)} value={data.end_date} type="date" />
        <button className='search_button' onClick={handlesubmit}>Search</button>
      </div>
      <div className='raw_data_acc_name_table'>
      <table>
             <thead>
  <tr>
    <th>Raw Material Name</th>
    <th>Batch Number</th>
    <th>Purchase Order Number</th>
    <th>Quantity</th>
    <th>Availability Status</th>
    <th>Unit of Measure</th>
    <th>Date of Receipt</th>
    <th>Expiry Date</th>
    <th>supplier Name</th>
    <th>Responsible Person</th>
    <th>Remarks</th>
  </tr>
</thead>
             
<tbody>
  {resdata.map((data) => (
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
    </tr>
  ))}
</tbody>
             </table>

      </div>
      <a className='raw_data_acc_name_pdf' onClick={Create_pdf}   download><span>Download</span><span>PDF</span></a>
    </div>
  )
}
