import React, { useState } from 'react'
import Axios from 'axios';
import './edite.css';

export default function Edite() {
    
    const[serchresponse,setSearchrespose] = useState([])

    const[data,setData]= useState({
        product_id:"",
        batch_no:"",
        raw_material_name:"",
        qty:"",
        price:"",
        date:""
    
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
            product_id:reData.idselect_raw_materials,
            batch_no:reData.batch_no,
            raw_material_name:reData.raw_material_name,
            qty:reData.qty,
            price:reData.unit_price,
            date:reData.date
        
          })
    
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
    }

    //update function
const update = async (e)=>{
    const id = data.product_id;
    // console.log(id)
    const res = await Axios.put(`http://localhost:8080/production/update_Raw_material/?id=${id}`,data)
    console.log(res.data)
    window.location.reload()
  }
  
  //delete function
  const deleteitem = async (e)=>{
    const id = data.product_id;
    const res = await Axios.delete(`http://localhost:8080/products/delete/?pruct_id=${id}`)
    console.log(res.data)
    window.location.reload()
  
  }
  return (
    <div className='edite_div_main'>
        <h1 className='edite_h1'> Edite/delete</h1>
        <div className='edite_div'>
            <div className='edite_div_1'>
            <input className='edite_input'  type='search' placeholder='search...' onChange={(e)=>SearchHandler(e)} />
            </div>
            

            <div className='edite_div_2'>
                <table>
                    <thead>
                        <tr>
                        <th>product name</th>
                            <th>batch no.</th>
                            
                            <th>quantity</th>
                            <th>unit price</th>
                            <th>date</th>
                            <th>select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serchresponse.map((item)=>(
                            <tr key={item.idselect_raw_materials}>
                                <td>{item.raw_material_name}</td>
                                <td>{item.batch_no}</td>
                                
                                <td>{item.qty}</td>
                                <td>{item.unit_price}</td>
                                <td>{item.date}</td>
                                <td><button onClick={selectHandler} value={item.idselect_raw_materials}>select</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
 
            <div className='edite_div_3'>
              <div >
                <div>
                <label>Batch no.</label>
                <input className='batch_no' type="text" id='batch_no' value={data.batch_no} onChange={(e)=>handle(e)} placeholder='name'/>
                </div>
                <div>
                <label>product name</label>
                <input className='product_name_select' type="text" id='raw_material_name' value={data.raw_material_name} onChange={(e)=>handle(e)} placeholder='name'/>
                </div>
                <div>
                <label>product QTY</label>
                <input className='QTY_select' type="text" id='qty' value={data.qty} onChange={(e)=>handle(e)} placeholder='name'/>
                </div>
              </div>
              <div>
              <div>
                <label>Unit price</label>
                <input className='price' type="text" id='price' value={data.price} onChange={(e)=>handle(e)} placeholder='name'/>
              </div>

                <div>
                <label>Date Time</label>
                <input className='price' type="date" id='date' value={data.date} onChange={(e)=>handle(e)} placeholder='name'/>
                </div>
                <button className='edite_button' onClick={update}>Edit</button>
                <button className='delete_button' onClick={deleteitem}>Delete</button>
              </div>
            </div>

            </div>
            <div className='space'></div>

        </div>
   
  )
}
