import React, { useEffect } from 'react'
import { useState } from 'react'
import './add_sale.css'
import Axios from 'axios'
import { FiEdit , FiDelete } from "react-icons/fi";



export default function Sale() {
  const[bill, setBill] = useState([])
  const[data, setData] = useState({   
    product_name:'',
    production_order_number:'',
    quantity_sold:'',
    unit_price:'',
     })

    const[data_const, setData_const] = useState({       
      sale_date:'',
      customer_name:'',
      payment_method:'',
      remarks:'',
      bill_id:''  })  


  function handle(e){
    e.preventDefault()
    
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
    
}
function handle_const(e){
  const newdata={...data_const}
  newdata[e.target.id]= e.target.value
  setData_const(newdata)
  
}

//set available products
const[available_products, setAvailable_products] = useState([])
const get_available_products = async()=>{
  const res = await Axios.get('http://localhost:8080/products/available')
  setAvailable_products(res.data)
}
useEffect(()=>{get_available_products()},[])

//set PO_no
const[PO_no, setPO_no] = useState([])
const get_PO_no = async()=>{
  const res = await Axios.get(`http://localhost:8080/products/searchone/?product_name=${data.product_name}`)
  // console.log(res.data)
  setPO_no(res.data)}
useEffect(()=>{
  get_PO_no()
},[data.product_name])

//get avalable product qty

const[available_product_qty, setAvailable_product_qty] = useState([])
const get_available_product_qty = async()=>{
  const res = await Axios.get(`http://localhost:8080/products/available_QTY_POno/?PO_no=${data.production_order_number}`)
  const first_arr = res.data
  
  if( first_arr.length !== 0){
    const qty = first_arr[0].available_quantity
    // console.log(qty)
    setAvailable_product_qty(qty)
  }
  


}
useEffect(()=>{
  get_available_product_qty()

},[data.production_order_number])



function addToBill(e) {
  e.preventDefault();

  // Check if the item already exists in the bill array
  const existingItemIndex = bill.findIndex((item) => item.product_name === data.product_name);

  if (existingItemIndex !== -1) {
    // If the item exists, update it with the new data
    const updatedBill = [...bill];
    updatedBill[existingItemIndex] = data;
    setBill(updatedBill);
  } else {
    // If the item doesn't exist, add it to the bill array
    setBill([...bill, data]);
  }

  clear_data();
}



function clear_data(){
  setData({
    product_name: '',
    production_order_number: '',
    quantity_sold: '',
    unit_price: '',
  });
}
useEffect(() => {
  clear_data()

},[bill])

const delete_handler = (e, index) => {
  const updatedBill = [...bill];
  updatedBill.splice(index, 1);
  setBill(updatedBill);
};

const edite_handler = (e, index, item) => {
  e.preventDefault();
  setData({
    product_name: item.product_name,
    production_order_number: item.production_order_number,
    quantity_sold: item.quantity_sold,
    unit_price: item.unit_price,
  });
  
  bill.splice(index, 1);
  setBill(bill);
  
};


const AddBill = async()=>{
  const res =await Axios.post('http://localhost:8080/sales/save',{
      PO_no:data.production_order_number,
      sale_date:data_const.sale_date,
      customer_name:data_const.customer_name,
      payment_method:data_const.payment_method,
      remarks:'',
      bill_id:data_const.bill_id,
      bill:bill
  })
  window.location.reload();
}


const subtotal = bill.reduce((total, item) => {
  return total + item.unit_price * item.quantity_sold;
}, 0);

  return (
    <div className='add_sale'>
        <div className='add_sale_main'>    
      <h1 className='add_sale_h1'>Sale</h1>
              <div className='add_sale_2'>
                
                <div>
                <label>sale_date</label>
                <input className='sale_date' type="date" id='sale_date' value={data_const.sale_date} onChange={(e)=>handle_const(e)} placeholder='sale_date'/>
                </div>
                <div>
                <label>customer_name</label>
                <input className='customer_name' type="text" id='customer_name' value={data_const.customer_name} onChange={(e)=>handle_const(e)} placeholder='customer_name'/>
                </div>
                <div>
                <label>payment_method</label>
                <input className='payment_method' type="text" id='payment_method' value={data_const.payment_method} onChange={(e)=>handle_const(e)} placeholder='payment_method'/>
                </div>
                {/* <div>
                <label>remarks</label>
                <input className='remark' type="text" id='remarks' value={data_const.remarks} onChange={(e)=>handle_const(e)} placeholder='remarks'/>
                </div> */}
                <div>
                <label>bill_id</label>
                <input className='bill_id' type="text" id='bill_id' value={data_const.bill_id} onChange={(e)=>handle_const(e)} placeholder='bill_id'/>
                </div>
                </div>
             <div className='add_sale_1'>
              <div className='add_sale_1_1'>
                <div >
                <label>product_name</label>
                <select className='product_name' id='product_name' value={data.product_name} onChange={(e)=>handle(e)}>
                  <option value="">Select Product</option>
                  {available_products.map((item, index) => (
                    <option key={index} value={item.product_name}>{item.product_name}</option>
                    ))}
                    
                </select>
                {/* <input className='product_name' type="text" id='product_name' value={data.product_name} onChange={(e)=>handle(e)} placeholder='product_name'/> */}
                </div>
                <div >
                <label>production_order_number</label>
                <select className='production_order_number' id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)}>
                  <option value="">Select PO_no</option>
                  {PO_no.map((item, index) => (
                    <option key={index} value={item.production_order_number}>{item.production_order_number}</option>
                    ))}
                </select>
                {/* <input className='production_order_number' type="text" id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)} placeholder='production_order_number'/> */}
                </div>

              </div>
              <div className='add_sale_1_2'>
                 <div >
                  <p>available qty : {available_product_qty}</p>
                <label>quantity_sold</label>
                <input className='quantity_sold' type="text" id='quantity_sold' value={data.quantity_sold} onChange={(e)=>handle(e)} placeholder='quantity_sold'/>
                </div>
                <div >
                <label>unit_price</label>
                <input className='unit_price' type="text" id='unit_price' value={data.unit_price} onChange={(e)=>handle(e)} placeholder='unit_price'/>
                </div>
              </div>
              <div>
                

              </div>
                 
                

                 <button className='add_sale_btn_1' onClick={(e)=>addToBill(e)}>Enter</button>
             </div>
 
               



                
                
                <div>
                  <table>
                    <thead>
                      <th>product_name</th>
                      <th>quantity_sold</th>
                      <th>unit_price</th>
                      <th>total_price</th>
                      <th>action</th>

                    </thead>
                    <tbody>
                      {bill.map((item, index) => (
                        <tr key={index}>
                          <td>{item.product_name}</td>
                          <td>{item.quantity_sold}</td>
                          <td>{item.unit_price}</td>
                          <td>{'$'+(item.unit_price*item.quantity_sold)}</td>
                          <td><button className='bill_delete_btn' onClick={(e)=>delete_handler(e,index)}><FiDelete/></button><button className='bill_edit_btn' onClick={(e)=>edite_handler(e,index,item)}><FiEdit/></button></td> 
                                                  
                        </tr>                        
                      ))}                       
                    </tbody>
                    <tbody>
                      <td colSpan={3}>Subtotal</td>
                      <td>{'$' + subtotal}</td>
                   </tbody>
                  </table>
                  <button className='bill_btn' onClick={(e)=>AddBill(e)}>Add_Bill</button>
                </div>
    </div>
    </div>
    
  )
}
