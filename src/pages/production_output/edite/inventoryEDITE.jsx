import React, { useEffect } from 'react'
import Axios from 'axios';
import { useState } from 'react'
import ('./inventoryEDITE.css')

export default function InventoryEDITE() {
  const serch_url ="http://localhost:8080/products/search"
  const[product_search,setProduct_search]=useState()
  // const Data = {
  //   production_order_number:"",
  //   product_name:"",
  //   quantity_produced:"",
  //   unit_of_measure:"",
  //   date_time_of_production:"",
  //   production_line:"",
  //   responsible_person:"",
  //   remarks:""}
  const[serchresponse,setSearchrespose] = useState([])

  // const[updateData,setUpdateData]= useState(Data)
  const[data,setData]= useState( 
    {
      output_id:"",
      production_order_number:"",
      product_name:"",
      quantity_produced:"",
      unit_of_measure:"",
      date_time_of_production:"",
      production_line:"",
      responsible_person:"",
      remarks:""}
  )
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
    
}

const submit = async (e)=>{  
  e.preventDefault();
  try{
      // console.log(data)
      
  } catch(error){console.log(error); }
}

//search value
const search = async (e)=>{
  try{
    setProduct_search(e.target.value)
    const paramValue = e.target.value;
    const res = await Axios.get(`${serch_url}?search=${paramValue}`)
    // console.log(res.data)
    setSearchrespose(res.data)   
    
    if (paramValue === '') {
      setSearchrespose([])
    }
  }
  catch(error){
    console.log(error)
    
  }
}

//search result select button function
const select = async (e)=>{
  // console.log(e.target)
  try {
    const inventory_id = e.target.value;
    const res = await Axios.get(`http://localhost:8080/products/searchone/?product_id=${inventory_id}`)
    const response_data = res.data[0]
    
    setData(

      {output_id:response_data.output_id,
        production_order_number:response_data.production_order_number,
        product_name:response_data.product_name,
        quantity_produced:response_data.quantity_produced,
        unit_of_measure:response_data.unit_of_measure,
        date_time_of_production:response_data.date_time_of_production,
        production_line:response_data.production_line,
        responsible_person:response_data.responsible_person,
        remarks:response_data.remarks
    })
    
  
  }
   catch (error) {
    
  }
}

//update inventory item function
const update = async (e)=>{
  const id = data.output_id;
  const res = await Axios.put(`http://localhost:8080/products/update/?product_id=${id}`,data)
  console.log(res.data)
  // window.location.reload()
}

//delete inventory item function
const deleteitem = async (e)=>{
  const id = data.output_id;
  const res = await Axios.delete(`http://localhost:8080/products/delete/?product_id=${id}`)
  console.log(res.data)
  window.location.reload()

}
  



  return (
    <div >
      <div className='space'></div>
      <h2 className='product_edite'>Edit / Delete</h2>
      <div className='add_'>
      
      
       <div className='main_set'>
       <div>
                  <input className='search' type='search' onChange={(e)=>search(e)} id='product_search' value={product_search} placeholder='search by product name'></input>
                </div>

       </div>
                
                <div className='search_result'>

                  <div className='tabel_div'>
                    <table className='search_table'>
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
          <th>Select</th>

                      </tr>
                    </thead>
                    <tbody>
                      {serchresponse.map((item)=>(
                        <tr key={item.idinventory_item_id}>
                          <td>{item.production_order_number}</td>
              <td>{item.product_name}</td>
              
              <td>{item.quantity_produced}</td>
              <td>{item.unit_of_measure}</td>
              <td>{item.date_time_of_production}</td>
              <td>{item.production_line}</td>
              <td>{item.responsible_person}</td>
              
              <td>{item.remarks}</td>
                          <td><button onClick={(e)=> select(e)} 
                          value={item.output_id                            
                                  }>select</button></td>
                        
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  </div>
                  
                  </div>
                  <div className='main_set_'>
                    <div >
                <div className='product_input_div'>
                <label className='product_input_label'>Production Order Number</label><p className='product_input_colon'>:</p>
                <input className='production_order_number' type="text" id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)} placeholder='production_order_number'/>
                </div>
                
                <div className='product_input_div'>
                <label className='product_input_label'>Product Name</label><p className='product_input_colon'>:</p>
                <input type="text" id='product_name' value={data.product_name} onChange={(e)=>handle(e)} placeholder='product_name'/>
                </div>
                   
                <div className='product_input_div'>
                <label className='product_input_label'>Quantity Produced</label><p className='product_input_colon'>:</p>
                <input type="text" id='quantity_produced' value={data.quantity_produced} onChange={(e)=>handle(e)} placeholder='quantity_produced'/>
                </div>
                
                <div className='product_input_div'>
                <label className='product_input_label'>Unit of Measure</label><p className='product_input_colon'>:</p>
                <input type="text" id='unit_of_measure' value={data.unit_of_measure} onChange={(e)=>handle(e)} placeholder='unit_of_measure'/>
                </div>
                
                <div className='product_input_div'>
                <label className='product_input_label'>Date Time of Production</label><p className='product_input_colon'>:</p>
                <input type="text" id='date_time_of_production' value={data.date_time_of_production} onChange={(e)=>handle(e)} placeholder='date_time_of_production'/>
                </div>

                <div className='product_input_div'>
                <label className='product_input_label'>Production Line</label><p className='product_input_colon'>:</p>
                <input type="text" id='production_line' value={data.production_line} onChange={(e)=>handle(e)} placeholder='production_line'/>
                </div>

                <div className='product_input_div'>
                <label className='product_input_label'>Responsible Person</label><p className='product_input_colon'>:</p>
                <input type="text" id='responsible_person' value={data.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
                </div>

                <div className='product_input_div'>
                <label  className='product_input_label'>Batch No</label><p className='product_input_colon'>:</p>
                <input type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
                </div>

                <div className='btn_set'>
            <button className='update_btn' onClick={update}>Update</button>
                <button className='delete_btn' onClick={deleteitem}>Delete</button>
                </div>


                </div>

                



                </div>
                
                

           
               </div>
                 
               
                
           
       
        <div className='space'></div>
    </div>
  )
}
