import  Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Sale_acc_date() {
    const[date, setdate] = useState([])

    const handleChanger = (e) =>{
        setdate(e.target.value)
        // console.log(date)
    }
   
    const [resdata, setResdata] = useState([])  
    const handleSubmit = async() =>{
        const res = await Axios.get(`http://localhost:8080/sales/sale_acc_date/?date=${date}`)
        // console.log(res.data)
        setResdata(res.data)
        
    }
    useEffect(( )=>{handleSubmit()},[date])

    //set bill id
    const[bill_id, setbill_id] = useState([])
    const handleChanger1 = (e) =>{

        setbill_id(e.target.value)
    }
      
   const [data_main, setData_main] = useState([])
    const handleSubmit_ = async() =>{
        // console.log(bill_id)
        const res = await Axios.get(`http://localhost:8080/sales/search_bill_data/?bill_id=${bill_id}`)
        console.log(res.data)
        setData_main(res.data)
        
    }
  return (
    <div>
        <h1>Sale according date</h1>

        <div>
            <label>date:</label>
            <input onChange={(e)=>handleChanger(e)} type="date" />
            {/* <button onClick={handleSubmit}>submit</button> */}
        </div>
        <div>
            <label>bill id:</label>
            <select onChange={(e)=>handleChanger1(e)} value={bill_id} id="">
                <option>select bill id</option>
                {
                    resdata.map((item)=>(
                       <option value={item.bill_id}>{item.bill_id }</option>
                    )
                    )
                }
                
            </select>
            <button onClick={handleSubmit_}>submit</button>
        </div>
        <div>
            <table>
                <thead>
                    <th>product_name</th>
                    <th>quantity_sold</th>
                    <th> unit_price</th>
                </thead>
                <tbody>
                    {data_main.map((item)=>(
                            <tr key={item.sale_id}>
                                <td>{item.product_name}</td>
                                <td>{item.quantity_sold}</td>
                                <td>{item.unit_price}</td>
                            </tr>
                            
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}
