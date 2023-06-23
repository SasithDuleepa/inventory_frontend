import React, { useEffect } from 'react'
import Axios from 'axios';
import { useState } from 'react'
import ('./inventoryEDITE.css')

export default function InventoryEDITE() {
  const serch_url ="http://localhost:8080/products/search"
  const[product_search,setProduct_search]=useState()
  const Data = {
    product_id:'',
    product_name: '',
   description: '',
    units: '',
     price: '',
      supplier: ''}
  const[serchresponse,setSearchrespose] = useState([]
    
  )

  const[updateData,setUpdateData]= useState(Data)
  const[data,setData]= useState( Data)
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
  catch(error){}
}

//search result select button function
const select = async (e)=>{
  // console.log(e.target)
  try {
    const inventory_id = e.target.value;
    const res = await Axios.get(`http://localhost:8080/products/searchone/?product_id=${inventory_id}`)
    const response_data = res.data[0]
    
    setData(
      { product_id:response_data.idinventory_item_id,
        product_name: response_data.product_name,
   description: response_data.product_description,
    units: response_data.product_SKU,
     price: response_data.product_price,
      supplier: response_data.product_supplier
    })
    
  
  }
   catch (error) {
    
  }
}

//update inventory item function
const update = async (e)=>{
  const id = data.product_id;
  const res = await Axios.put(`http://localhost:8080/products/update/?product_id=${id}`,data)
  console.log(res.data)
  window.location.reload()
}

//delete inventory item function
const deleteitem = async (e)=>{
  const id = data.product_id;
  const res = await Axios.delete(`http://localhost:8080/products/delete/?product_id=${id}`)
  console.log(res.data)
  window.location.reload()

}
  



  return (
    <div>
      <h2 className='product_edite'>Product EDITE</h2>
      <div className='add'>
      

                <div>
                  <input className='search' type='search' onChange={(e)=>search(e)} id='product_search' value={product_search} placeholder='search by product name'></input>
                </div>
                <div className='search_result'>
                  <table className='search_table'>
                    <thead>
                      <tr>
                        <th>product_name</th>
                        <th>product_description</th>
                        <th>product_price</th>
                        <th>product_supplier</th>
                        <th>product_SKU</th>
                        <th>select</th>

                      </tr>
                    </thead>
                    <tbody>
                      {serchresponse.map((item)=>(
                        <tr key={item.idinventory_item_id}>
                          <td>{item.product_name}</td>
                          <td>{item.product_description}</td>
                          <td>{item.product_price}</td>
                          <td>{item.product_supplier}</td>
                          <td>{item.product_SKU}</td>
                          <td><button onClick={(e)=> select(e)} 
                          value={item.idinventory_item_id                            
                                  }>select</button></td>
                        
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 
                </div>
                <form onSubmit={(e)=> submit(e)}>
                  <div className='main_set'>
                    <div className='set_1'>
                <div>
                <label>product name</label>
                <input className='product_name' type="text" id='product_name' value={data.product_name} onChange={(e)=>handle(e)} placeholder='name'/>
                </div>
                
                <div>
                <label>description</label>
                <textarea type="text" id='description' value={data.description} onChange={(e)=>handle(e)} placeholder='description'/>
                </div>
                    </div>
                    <div className='set_2'>
                <div>
                <label>Stoke Keeping Units</label>
                <input type="text" id='units' value={data.units} onChange={(e)=>handle(e)} placeholder='units'/>
                </div>
                
                <div>
                <label>price</label>
                <input type="text" id='price' value={data.price} onChange={(e)=>handle(e)} placeholder='price'/>
                </div>
                
                <div>
                <label>supplier</label>
                <input type="text" id='supplier' value={data.supplier} onChange={(e)=>handle(e)} placeholder='supplier'/>
                </div>
                </div>
                </div>
                


            </form>
            <div className='btn_set'>
            <button className='update_btn' onClick={update}>update</button>
                <button className='delete_btn' onClick={deleteitem}>delete</button>
                </div>
        </div>
    </div>
  )
}
