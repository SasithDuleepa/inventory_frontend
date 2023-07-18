import React, { useState } from 'react'
import Axios from 'axios';
import './edite.css';

export default function Edite() {
    
    const[serchresponse,setSearchrespose] = useState([])

    const[data,setData]= useState({
      idselect_raw_materials:"",
      production_order_number: "PO-",
      raw_material_name: "",
      quantity_used: "",
      unit_of_measure: "",
      batch_number: "BATCH-",
      date_time_of_usage: "", // Initialize as an empty string
      production_line: "",
      responsible_person: "",
      scrap_waste_quantity: "",
      remarks: ""
    
      })

    const SearchHandler = async(e) => {
        console.log(e.target.value);
        const searchdata = e.target.value;
        try {
            const res =await Axios.get(`http://localhost:8080/production/search_Raw_material/?search=${searchdata}`);
            console.log(res.data);
            setSearchrespose(res.data);
        } catch (error) {
            
        }
        

    }

    const selectHandler = async(e)=>{
        const id = e.target.value;
        console.log(id);
        const res = await Axios.get(`http://localhost:8080/production/search_Raw_material_one/?id=${id}`);
        const reData = res.data[0];
        setData({
          idselect_raw_materials: reData.usage_id,
          production_order_number: reData.production_order_number,
          raw_material_name: reData.raw_material_name,
          quantity_used: reData.quantity_used,
          unit_of_measure: reData.unit_of_measure,
          batch_number: reData.batch_number,
          date_time_of_usage: reData.date_time_of_usage,
          production_line: reData.production_line,
          responsible_person: reData.responsible_person,
          scrap_waste_quantity: reData.scrap_waste_quantity,
          remarks: reData.remarks
        
          })
    
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
    }

    //update function
const update = async (e)=>{
    const id = data.idselect_raw_materials;
    console.log(id)
    // console.log(id)
    const res = await Axios.put(`http://localhost:8080/production/update_Raw_material/?id=${id}`,data)
    
    window.location.reload()
  }
  
  //delete function
  const deleteitem = async (e)=>{
    const id = data.idselect_raw_materials;
    const res = await Axios.delete(`http://localhost:8080/production/delete/?product_id=${id}`)
    console.log(res.data)
    window.location.reload()
  
  }
  return (
    <div className='edite_div_main'>
        
        <div className='edite_div'>
        <h1 className='edite_h1'> Edit/Delete</h1>
            <div className='edite_div_1'>
            <input className='edite_input'  type='search' placeholder='search...' onChange={(e)=>SearchHandler(e)} />
            </div>
            

            <div className='edite_div_2'>
                <table>
                    <thead>
                        <tr>
                          <th>Usage Id</th>
                        <th>production Order Number</th>
              <th>Raw Material Name</th>
              <th>Quantity Used</th>
              <th>Unit of Measure</th>
              <th>Batch Number</th>
              <th>Date Time of Usage</th>
              <th>Production Line</th>
              <th>Responsible Person</th>
              <th>Scrap Waste Quantity</th>
              <th>Remarks</th>
              <th>Quantity Available</th>
              <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serchresponse.map((item)=>(
                            <tr key={item.idselect_raw_materials}>
                              <td>{item.usage_id}</td>
                                <td>{item.production_order_number}</td>
                <td>{item.raw_material_name}</td>
                <td>{item.quantity_used}</td>
                
                <td>{item.unit_of_measure}</td>
                <td>{item.batch_number}</td>
                <td>{item.date_time_of_usage}</td>
                <td>{item.production_line}</td>
                <td>{item.responsible_person}</td>
                <td>{item.scrap_waste_quantity}</td>
                <td>{item.remarks}</td>
                <td>{item.quantity_available}</td>
                                <td><button onClick={selectHandler} value={item.usage_id}>select</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
 
            <div className='edite_div_3'>
              <div >
                <div className='production_input_div'>
                <label className='product_input_label'>Production Order Number</label><p className='production_input_colon'>:</p>
                <input className='production_order_number_' type="text" id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)} placeholder='production_order_number'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Raw material Name</label><p className='production_input_colon'>:</p>
                <input className='raw_material_name' type="text" id='raw_material_name' value={data.raw_material_name} onChange={(e)=>handle(e)} placeholder='raw_material_name'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Quantity Used</label><p className='production_input_colon'>:</p>
                <input className='quantity_used_' type="text" id='quantity_used' value={data.quantity_used} onChange={(e)=>handle(e)} placeholder='quantity_used'/>
                </div>
              
              <div className='production_input_div'>
                <label className='product_input_label'>Unit of Measure</label><p className='production_input_colon'>:</p>
                <input className='unit_of_measure_' type="text" id='unit_of_measure' value={data.unit_of_measure} onChange={(e)=>handle(e)} placeholder='unit_of_measure'/>
              </div>

                <div className='production_input_div'>
                <label className='product_input_label'>Batch Number</label><p className='production_input_colon'>:</p>
                <input className='batch_number' type="text" id='batch_number' value={data.batch_number} onChange={(e)=>handle(e)} placeholder='batch_number'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Date Time of Usage</label><p className='production_input_colon'>:</p>
                <input className='date_time_of_usage' type="text" id='date_time_of_usage' value={data.date_time_of_usage} onChange={(e)=>handle(e)} placeholder='date_time_of_usage'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Production Line</label><p className='production_input_colon'>:</p>
                <input className='production_line' type="text" id='production_line' value={data.production_line} onChange={(e)=>handle(e)} placeholder='production_line'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Responsible Person</label><p className='production_input_colon'>:</p>
                <input className='responsible_person' type="text" id='responsible_person' value={data.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Scrap Waste Quantity</label><p className='production_input_colon'>:</p>
                <input className='scrap_waste_quantity' type="text" id='scrap_waste_quantity' value={data.scrap_waste_quantity} onChange={(e)=>handle(e)} placeholder='scrap_waste_quantity'/>
                </div>
                <div className='production_input_div'>
                <label className='product_input_label'>Remarks</label><p className='production_input_colon'>:</p>
                <input className='remarks' type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
                </div>
                <div className='production_input_div_button'>
                <button className='edite_button' onClick={update}>Update</button>
                <button className='delete_button' onClick={deleteitem}>Delete</button>

                </div>
                
                
              </div>
            </div>

            </div>
            <div className='space'></div>

        </div>
   
  )
}
