import React, { useState , useEffect } from 'react'
import Axios from 'axios';
import './add_sale.css'

export default function Add_sale() {
    const [inventoryData, setInventoryData] = useState([]);//api get values for productname
    const [selectedProduct, setSelectedProduct] = useState();//input value for product
    

    const [bill_id, setBill_id ]= useState (99)

   
    

   
    const [all_data, setAll_data] = useState({
        product_name:"",
        units:'',
        unit_price:'',
        customer:'',
        date:'',
        bill_id:''
    
    })


     //all input data for table
     const [table_data, setTable_data] = useState([]);
    


    const HandleUnits = (e) =>{
       const newdata = {...all_data}
       newdata.units = e.target.value
        setAll_data(newdata)
        
    
    }
    const HandleUnitprice = (e) =>{      
      const newdata = {...all_data}
      newdata.unit_price = e.target.value 
        setAll_data(newdata)
    }
         
    const handleChange = (event) => {
      const newdata = {...all_data}
      newdata.product_name = event.target.value
        setAll_data(newdata)
      }

    const HandleCustomer = (e) =>{        
      const newdata = {...all_data}
      newdata.customer = e.target.value
        setAll_data(newdata)
    }
    const HandleDate = (e) =>{
      const newdata = {...all_data}
      newdata.date = e.target.value
        setAll_data(newdata)
    }
       



   //add button function
   const add_sale = async() =>{

    if(all_data.product_name === undefined || all_data.units ===undefined || all_data.unit_price === undefined || all_data.customer === undefined || all_data.date === undefined){
      alert('fill all fields')
    }else{
      const newdata = {...all_data}
        setTable_data([...table_data,newdata])
        console.log(table_data);
    }

      }


//function for get Product names
const Get_product_names =async() =>{
    try {
        const res = await Axios.get('http://localhost:8080/products/searchAll');
        setInventoryData(res.data);
        
    } catch (error) {
        console.log(error);
    }
}      



//send data to server
const send_data = async() =>{
  console.log(table_data)
  try {
    const resp =await Axios.post('http://localhost:8080/sales/save',table_data);
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
}

//create bill id 
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}
const generateBillNumber = () => {
  const prefix = 'BILL';
  const timestamp = Date.now().toString();
  const uniqueId = generateUniqueId();

  const generatedBillNumber = `${prefix}-${timestamp}-${uniqueId}`;
  setBill_id(generatedBillNumber);
  setAll_data({bill_id:generatedBillNumber})
};





useEffect(() => {
  Get_product_names();
  generateBillNumber();
}, []);


  return (
    <div>
        <h1>Add Sale</h1>
        <div>
         <div className='sales_main'>
          <div className='bill_id'>

          </div>
                
                  
                <div className='sales_left'>
                  <p> Bill id : {all_data.bill_id}</p>
                <div>
                    <label className='label_product'>Select Product</label>
                <select value={selectedProduct} onChange={handleChange} required='true'>
                <option>select product</option>
                    {inventoryData.map((product, index)=>(
                        
                        <option key={index} value={product.product_name}>{product.product_name}</option>
                    ))}    
                </select>
                </div>

                 <div>
                <label className='label_units'>product Unitss</label>
                <input className='input_units' id='units' onChange={(e)=>HandleUnits(e)} value={all_data.units} type="number"  placeholder='4 products available' required/>
                </div>

                <div>
                <label className='label_Unitprice'>Unit Price</label>
                <input className='input_unitprice' onChange={(e)=>HandleUnitprice(e)} value={all_data.unit_price} type="text"  placeholder='unit price' />
                </div>
                
                </div>

                <div className='sales_right'>
                {/* <div>
                    <label className='label_product'>Select customer</label>
                <select value={selectedProduct} onChange={handleChange}>
                    {inventoryData.map((product, index)=>(
                        <option key={index} value={product.product_name}>{product.product_name}</option>
                    ))}    
                </select>
                </div> */}
                <div>
                <label className='label_Customer'>customer</label>
                <input className='input_Customer' onChange={(e)=>HandleCustomer(e)} value={all_data.customer}   type="text"  placeholder='Customer' />
                </div>

                <div>
                <label className='label_Date'>Date</label>
                <input className='input_unitprice' onChange={(e)=>HandleDate(e)} value={all_data.date}  type="date"  placeholder='Date' />
                </div>

                <button onClick={add_sale}>ADD</button>

                </div>

                
                
                
                
               
                
                
                
                

                
         </div>

         <div className='sale_report'>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Units</th>
                <th>Unit Price</th>
                <th>Customer</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {table_data.map((data, index)=>(
                <tr key={index}>
                  <td>{data.product_name}</td>
                  <td>{data.units}</td>
                  <td>{data.unit_price}</td>
                  <td>{data.customer}</td>
                  <td>{data.date}</td>
                </tr>
              ))}
            </tbody>

          </table>

         </div>
         <button onClick={send_data}>Submit</button>
        </div>
    </div>
  )
}
