import Axios  from 'axios';
import React, { useState } from 'react'
import './view.css'

export default function View() {
    const[bill_id, setBill_id] = useState([])

    const[bill_data, setBill_data]= useState([]);

    const searchHandler = async(e) => {
        const search_value = e.target.value;
        

        const res = await Axios.get(`http://localhost:8080/sales/search_bill_billID?bill_id=${search_value}`)
        
        setBill_id(res.data);
    }
    const bill_selectHandler = async(e) => {
        //send bill number to get bill details
       
        const bill_number = e.target.getAttribute('value');
        const res = await Axios.get(`http://localhost:8080/sales/search_bill_data?bill_number=${bill_number}`)
        
        setBill_data(res.data);
    }
    
  return (
    <div className='View_main'>
        <h1 className='View_heading'>View</h1>
        <div className='View_container'>

        <div className='div_search'>
        <div className='search_container'>
            <input className='search_input' onChange={(e)=>searchHandler(e)} type="search" placeholder='bill no.'/>
        
        <div className='bill_list'>
            {bill_id.map((item)=>
            <li className='bill_list_item' key={item.idsales}>
                <a id='bill_number' onClick={(e)=>bill_selectHandler(e)} value={item.bill_number}>{item.bill_number}</a>
            </li>
             
             )}
        </div>
        </div>

        </div>    

        

        <div className='bill_data'>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>unit price</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tbody>
                    {bill_data.map((item)=>(
                        <tr key={item.idsales}>
                            <td>{item.product_name}</td>
                            <td>{item.units}</td>
                            <td>{item.unit_price}</td>
                            <td>{item.total_price}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
        </div>
        <div className='space'></div>
        
    </div>
  )
}
