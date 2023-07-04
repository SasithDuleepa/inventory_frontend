import React, { useState } from 'react'
import './edite.css'
import Axios from 'axios';

export default function Edite() {
  const serch_url ="http://localhost:8080/raw_input/search_Raw"
  const [search, setSearch]= useState("");
  const[serchresponse,setSearchrespose] = useState([])//data from api
  const[select,setSelect] = useState({
    idRaw_inputs:"",
    input_name:"",
    input_SKU:"",
    input_unit_price:"",
    input_date:"",
    input_supplier:""
  
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
        input_name:response_data.input_name,
        input_SKU:response_data.input_SKU,
        input_unit_price:response_data.input_unit_price,
        input_date:response_data.input_date,
        input_supplier:response_data.input_supplier,
        idRaw_inputs:response_data.idRaw_inputs
      })
      console.log(select)
      
    } catch (error) {
      
    }
    
    
  }
  function handle(e){
    const newdata={...select}
    newdata[e.target.id]= e.target.value
    setSelect(newdata)
    window.location.reload()
    
}



const Edit =async()=>{
  const id = select.idRaw_inputs;
  const res = await Axios.put(`http://localhost:8080/raw_input/update_raw/?Raw_id=${id}`,select)
  console.log(res.data)
  window.location.reload()
}
const Delete =async()=>{
  const id = select.idRaw_inputs;
  const res = await Axios.delete(`http://localhost:8080/raw_input/delete_raw/?Raw_id=${id}`,)
  console.log(res.data)
  window.location.reload()

  
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
                <th>Quntity</th>
                <th>Price</th>
                <th>date</th>
                <th>supplier</th>
                <th>select</th>
              </tr>
            </thead>
            <tbody>
              {serchresponse.map((item) => (
                <tr key={item.idRaw_inputs}>
                  <td>{item.input_name}</td>
                  <td>{item.input_SKU}</td>
                  <td>{item.input_unit_price}</td>
                  <td>{item.input_date}</td>
                  <td>{item.input_supplier}</td>
                  <th><button onClick={(e)=>SelectHandler(e)} value={item.idRaw_inputs}>Select</button></th>

                  </tr>))}
            </tbody>
          </table>
        </div>

        <div className='edite_main'>
          <div className='set_1'>
          <div>
                <label>raw material name</label>
                <input className='input_name' type="text" id='input_name' value={select.input_name} onChange={(e)=>handle(e)} placeholder='input_name'/>
                </div>
                <div>
                <label>stock keeping units</label>
                <input className='input_name' type="text" id='input_SKU' value={select.input_SKU} onChange={(e)=>handle(e)} placeholder='input_name'/>
                </div>
                <div>
                <label>unit price</label>
                <input className='input_name' type="text" id='input_unit_price' value={select.input_unit_price} onChange={(e)=>handle(e)} placeholder='input_name'/>
                </div>

          </div>
          <div className='set_2'>
          <div>
                <label>supplier</label>
                <input className='input_name' type="text" id='input_supplier' value={select.input_supplier} onChange={(e)=>handle(e)} placeholder='input_name'/>
                </div>
                <div>
                <label>date</label>
                <input className='input_name' type="text" id='input_date' value={select.input_date} onChange={(e)=>handle(e)} placeholder='input_name'/>
                </div>

                <button onClick={Edit} className='edite_button'>Edite</button>
                <button onClick={Delete} className='delete_button'>Delete</button>

          </div>
                
                
        </div>


        </div>

        

        <div className='space'></div>


    </div>
  )
}
