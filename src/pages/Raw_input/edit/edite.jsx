import React, { useState } from 'react'
import './edite.css'
import Axios from 'axios';

export default function Edite() {
  const serch_url ="http://localhost:8080/raw_input/search_Raw"
  const [search, setSearch]= useState("");
  const[serchresponse,setSearchrespose] = useState([])//data from api
  const[select,setSelect] = useState({
    inventory_id:"",
    raw_material_name:"",
    supplier_name:"",
    purchase_order_number:"PO-",
    quantity:"",
    unit_of_measure:"",
    unit_price:"",
    batch_number:"",
    date_of_receipt:"",
    expiry_date:"",
    location:"",
    responsible_person:"",
    remarks:""
  
  })
  
  const searchHandler = async(e) =>{    
    try {
      
      setSearch(e.target.value);
      const paramValue = e.target.value;
      const res = await Axios.get(`${serch_url}?search=${paramValue}`)
      
      setSearchrespose(res.data)
     
      
    } catch (error) {      
    }
      
  }

 
  const SelectHandler = async (e) => {
    const raw_id = e.target.value;
    try {
      const res = await Axios.get(`http://localhost:8080/raw_input/search_a_product/?Raw_id=${raw_id}`)
      const response_data = res.data[0]
      setSelect({
        inventory_id:response_data.inventory_id,
        raw_material_name:response_data.raw_material_name,
        supplier_name:response_data.supplier_name,
    purchase_order_number:response_data.purchase_order_number,
    quantity:response_data.quantity,
    unit_of_measure:response_data.unit_of_measure,
    unit_price:response_data.unit_price,
    batch_number:response_data.batch_number,
    date_of_receipt:response_data.date_of_receipt,
    expiry_date:response_data.expiry_date,
    location:response_data.location,
    responsible_person:response_data.responsible_person,
    remarks:response_data.remarks,
      })
      console.log(select)
      
    } catch (error) {
      
    }
    
    
  }
  function handle(e){
    const newdata={...select}
    newdata[e.target.id]= e.target.value
    setSelect(newdata)
    // window.location.reload()
    
}



const Edit =async()=>{
  const id = select.inventory_id;
  const res = await Axios.put(`http://localhost:8080/raw_input/update_raw/?Raw_id=${id}`,select)
  console.log(select)
  // window.location.reload()
}
const Delete =async()=>{
  const id = select.inventory_id;
  const res = await Axios.delete(`http://localhost:8080/raw_input/delete_raw/?Raw_id=${id}`,)
  console.log(res.data)
  // window.location.reload()

  
}
  return (
    <div className='Edit_main_container'>
        <h1 className='Edit_title'>Edite / Delete</h1>

        <div className='Edit_main'> 
        
        <div className='search_bar'><input className='search_input' type='search' onChange={(e)=>searchHandler(e)}  placeholder='Search'/></div>
 

        <div className='Edit_table'>
          <table>
            <thead>
              <tr>
                <th>Raw input name</th>
                <th>Supplier Name</th>
                <th>Purchase Order Number</th>
                <th>Quantity</th>
                <th>Unit of Measure</th>
                <th>Unit Price</th>
                <th>Batch Number</th>
                <th>Date ofReceipt</th>
                <th>Expiry Date</th>
                <th>Location</th>
                <th>Responsible Person</th>
                <th>Remarks</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {serchresponse.map((item) => (
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
                  <th><button onClick={(e)=>SelectHandler(e)} value={item.inventory_id}>Select</button></th>

                  </tr>))}
            </tbody>
          </table>
        </div>

        <div className='edite_main'>
          <div>
               <div className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Raw Material Name</label><p className='raw_input_edit_colan'>:</p>
                <input className='raw_material_name' type="text" id='raw_material_name' value={select.raw_material_name} onChange={(e)=>handle(e)} placeholder='raw_material_name'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Supplier Name</label><p className='raw_input_edit_colan'>:</p>
                <input className='supplier_name_' type="text" id='supplier_name' value={select.supplier_name} onChange={(e)=>handle(e)} placeholder='supplier_name'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Purchase Order Number</label><p className='raw_input_edit_colan'>:</p>
                <input className='purchase_order_number' type="text" id='purchase_order_number' value={select.purchase_order_number} onChange={(e)=>handle(e)} placeholder='purchase_order_number'/>
                </div>

        
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Quantity</label><p className='raw_input_edit_colan'>:</p>
                <input className='quantity' type="text" id='quantity' value={select.quantity} onChange={(e)=>handle(e)} placeholder='quantity'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Unit of Measure</label><p className='raw_input_edit_colan'>:</p>
                <input className='unit_of_measure_' type="text" id='unit_of_measure' value={select.unit_of_measure} onChange={(e)=>handle(e)} placeholder='unit_of_measure'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Unit Price</label><p className='raw_input_edit_colan'>:</p>
                <input className='unit_price' type="text" id='unit_price' value={select.unit_price} onChange={(e)=>handle(e)} placeholder='unit_price'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Batch Number</label><p className='raw_input_edit_colan'>:</p>
                <input className='batch_number' type="text" id='batch_number' value={select.batch_number} onChange={(e)=>handle(e)} placeholder='batch_number'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Date of Receipt</label><p className='raw_input_edit_colan'>:</p>
                <input className='date_of_receipt' type="text" id='date_of_receipt' value={select.date_of_receipt} onChange={(e)=>handle(e)} placeholder='date_of_receipt'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Expiry Date</label><p className='raw_input_edit_colan'>:</p>
                <input className='expiry_date' type="text" id='expiry_date' value={select.expiry_date} onChange={(e)=>handle(e)} placeholder='expiry_date'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Location</label><p className='raw_input_edit_colan'>:</p>
                <input className='location' type="text" id='location' value={select.location} onChange={(e)=>handle(e)} placeholder='location'/>
                </div>
                <div  className=' raw_input_edit_input'>
                <label className='raw_input_edit_label'>Responsible Person</label><p className='raw_input_edit_colan'>:</p>
                <input className='responsible_person' type="text" id='responsible_person' value={select.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
                </div>
                <div  className=' raw_input_edit_input'>
                  <label className='raw_input_edit_label' >Remarks</label><p className='raw_input_edit_colan'>:</p>
                  <input className='remarks' type="text" id='remarks' value={select.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
                </div>

                <div className='raw_edite_button'>
                <button onClick={Edit} className='edite_button'>Update</button>
                <button onClick={Delete} className='delete_button'>Delete</button>

                </div>


                

          </div>
                
                
        </div>


        </div>

        

        <div className='space'></div>


    </div>
  )
}
