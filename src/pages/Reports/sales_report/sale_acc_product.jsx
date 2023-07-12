import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import logoImage from './../../../logo.jpg';

export default function Sale_acc_product() {
  //get product names
  const [data, setData] = useState([]);
  const getdata = async () => {
    const res = await Axios.get("http://localhost:8080/product_name/get_all_names");
    // console.log(res.data);
    setData(res.data);
  }

  const[product_name,setProduct_name] = useState([]);
  const productname_Handler = (e) => {
    setProduct_name(e.target.value);
   

  }
  useEffect(() => {getdata()},[])


  //get sale data
  const [sale_data, setSale_data] = useState([]);
  const getsale_data = async () => {
    const res = await Axios.get(`http://localhost:8080/sales/data_acc_productname/?product_name=${product_name}`);
    // console.log(res.data);
    setSale_data(res.data);
  }
  useEffect(()=>{getsale_data()},[product_name])

  const Create_pdf = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    const currentDate = new Date().toLocaleDateString('en-US');
  
    const companyName = 'Your Company Name';
    const reportTitle = 'Product Wise Sale Report';

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
    doc.text(`Product name : ${product_name}`,60, 190, { align: 'left' });
  
    const tableHeaders = [
      'bill_id',
      'customer_name',
      'product_name',
      'quantity_sold',
      'unit_price',
      'total_price',
      'payment_method'
      

      
    ];
  
    const tableData = sale_data.map((data) => [
      data.bill_id,
      data.customer_name,
      data.product_name,
      data.quantity_sold,
      data.unit_price,  
      data.total_price,
      data.payment_method
    ]);
  
    const tableWidth = 580;
    const startX = (doc.internal.pageSize.getWidth() - tableWidth)+100 ;
  
    doc.autoTable({
      startY: 300,
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

    doc.text('total sale Rs. ' + sale_data.reduce((acc,item)=>acc+item.total_price,0), 60, 220, { align: 'left' });
  
    doc.save('product_report.pdf');
  };

  return (
    <div>
      <h1 className='raw_data_acc_name'>Sales according to product</h1>
      <div className='raw_data_acc_name_div'>
        <label className='raw_data_acc_name_label'>select product</label>
        <select className='raw_data_acc_name_select' value={product_name}  id='product_name' onChange={(e)=>productname_Handler(e)} name='product_name'>
          <option>select product</option>
          {data.map((item) => {
            return (
              <option value={item.product_name}>{item.product_name}</option>
              )
          }
          )}
        </select>
      </div>
      <div>
      <table>
                <thead>
                    <th>bill_id</th>
                    <th>product_name</th>
                    <th>customer_name</th>
                    <th>quantity_sold</th>
                    <th> unit_price</th>
                    <th>total_price</th>
                    <th>payment_method</th>
                </thead>
                <tbody>
                    {sale_data.map((item)=>(
                            <tr key={item.sale_id}>
                                <td>{item.bill_id}</td>
                                <td>{item.customer_name}</td>
                                <td>{item.product_name}</td>
                                <td>{item.quantity_sold}</td>
                                <td>{item.unit_price}</td>
                                <td>{item.total_price}</td>
                                <td>{item.payment_method}</td>
                            </tr>
                            
                        ))
                    }

                </tbody>
                <tbody>
                    <td colSpan={5}> total</td>
                    <td>Rs. {sale_data.reduce((acc,item)=>acc+item.total_price,0).toFixed(2)}</td>
                </tbody>
            </table>
      </div>
      <a className='raw_data_acc_name_pdf' onClick={Create_pdf}   download><span>Download</span><span>PDF</span></a>
    </div>
  )
}
