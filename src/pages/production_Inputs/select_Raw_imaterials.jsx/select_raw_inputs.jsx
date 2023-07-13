// import React, { useEffect, useState } from 'react'
// import Axios from 'axios';

// import { registerLocale } from 'react-datepicker';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import en from 'date-fns/locale/en-US';

// import './select_raw_inputs.css';

// registerLocale('en', en);






// export default function Select_raw_inputs() {
//   const [rawNames, setRawNames] = useState([])  
//   const [rawNo, setRawNo] = useState([])
//   const [qty, setQty] = useState([])


//     const url ="http://localhost:8080/production/save_Raw_materials"
//     const[data,setData]= useState({
//       production_order_number:"",
//       raw_material_name:"",
//       quantity_used:"",
//       unit_of_measure:"",
//       batch_number:"",
//       date_time_of_usage:"",
//       production_line:"",
//       responsible_person:"",
//       scrap_waste_quantity:"",
//       remarks:""
    
//       })
//       function handle(e){
//         const newdata={...data}
//         newdata[e.target.id]= e.target.value
//         setData(newdata)
//     }
//     function handleDateChange(date, id) {
//       const formattedDate = date.toISOString(); // Format date as ISO string
//       const newdata = { ...data, [id]: formattedDate };
//       setData(newdata);
//     }
    
//     const submit = async (e)=>{ 
//         e.preventDefault();
//         try {
//           const resp =await Axios.post(url,{    
//             production_order_number:data.production_order_number,
//             raw_material_name:data.raw_material_name,
//             quantity_used:data.quantity_used,
//             unit_of_measure:data.unit_of_measure,
//             batch_number:data.batch_number,
//             date_time_of_usage:data.date_time_of_usage,
//             production_line:data.production_line,
//             responsible_person:data.responsible_person,
//             scrap_waste_quantity:data.scrap_waste_quantity,
//             remarks:data.remarks
            
//         });   
//         if(resp.data.error){
//           alert(resp.data.message)
//         }else{
//           alert(resp.data.message)
//         }
//         }
          
//          catch (error) {
          
//         }
      
//       }

//   // const get_raw_names = async()=>{
//   //   const res = await Axios.get('http://localhost:8080/selection/raw_names')    
//   //   setRawNames(res.data)  
//   // } 
//   // useEffect(()=>{
//   //   get_raw_names()
//   // },[])


//   // const get_raw_no = async()=>{
//   //   const res = await Axios.get(`http://localhost:8080/selection/raw_no/?Raw_name=${data.raw_material_name}`)    
//   //   // console.log(res.data) 
//   //   setRawNo(res.data) 
//   // }
//   // useEffect(()=>{
//   //   get_raw_no()  
//   // },[data.raw_material_name])

//   // const get_qty = async()=>{
//   //   const res = await Axios.get(`http://localhost:8080/selection//raw_qty/?Raw_no=${data.raw_no}`)  
//   //   // console.log(res.data)
//   //   setQty(res.data)
//   // }
//   // useEffect(()=>{
//   //   get_qty()  
//   // },[data.raw_no])


//   return (
//     <div className='select_raw_inputs'>
//         <h1 className='select_raw_inputs_h1'>Select_raw_inputs to procces</h1>

//         <div className='select_raw_inputs_div'>
        
                
//               <div>

             
//                 {/* <div>
//                 <label>select raw no:</label>       
//                 <select className='supplier' id='raw_no'value={data.raw_no} onChange={(e)=>handle(e)} required='true'>
//                 <option>select raw no</option>
//                     {rawNo.map((product, index)=>(
//                         <option key={index} value={product.raw_no}>{product.raw_no}</option>
//                     ))}    
//                 </select>
//                 </div> */}

               
                


//               <div>
//                 <label>production_order_number</label>
//                 <input className='production_order_number' type="text" id='production_order_number' value={data.production_order_number} onChange={(e)=>handle(e)} placeholder='production_order_number'/>
//               </div>
//               <div>
//                 <label>raw_material_name</label>
//                 <input className='raw_material_name' type="text" id='raw_material_name' value={data.raw_material_name} onChange={(e)=>handle(e)} placeholder='raw_material_name'/>
//               </div>
//               <div>
//                 <label>quantity_used</label>
//                 <input className='bquantity_used' type="number" id='quantity_used' value={data.quantity_used} onChange={(e)=>handle(e)} placeholder='quantity_used'/>
//               </div>
//               <div>
//                 <label>unit_of_measure</label>
//                 <input className='unit_of_measure' type="text" id='unit_of_measure' value={data.unit_of_measure} onChange={(e)=>handle(e)} placeholder='unit_of_measure'/>
//               </div>
//               <div>
//                 <label>batch_number</label>
//                 <input className='batch_number' type="text" id='batch_number' value={data.batch_number} onChange={(e)=>handle(e)} placeholder='batch_number'/>
//               </div>
//               <div>
//                 <label>date_time_of_usage</label>
//                 <DatePicker
//   className='date_time_of_usage'
//   selected={data.date_time_of_usage}
//   onChange={date => handleDateChange(date, 'date_time_of_usage')}
//   showTimeSelect
//   timeFormat="HH:mm"
//   timeIntervals={15}
//   dateFormat="yyyy-MM-dd HH:mm"
//   placeholderText='date_time_of_usage'
//   locale="en"
// />

                
//                 {/* <input className='date_time_of_usage' type="date" id='date_time_of_usage' value={data.date_time_of_usage} onChange={(e)=>handle(e)} placeholder='date_time_of_usage'/> */}
//               </div>
//               <div>
//                 <label>Batch no.</label>
//                 <input className='batch_no' type="text" id='batch_no' value={data.batch_no} onChange={(e)=>handle(e)} placeholder='batch no'/>
//               </div>
//               <div>
//                 <label>production_line</label>
//                 <input className='production_line' type="text" id='production_line' value={data.production_line} onChange={(e)=>handle(e)} placeholder='production_line'/>
//               </div>
//               <div>
//                 <label>responsible_person</label>
//                 <input className='responsible_person' type="text" id='responsible_person' value={data.responsible_person} onChange={(e)=>handle(e)} placeholder='responsible_person'/>
//               </div>
//               <div>
//                 <label>scrap_waste_quantity</label>
//                 <input className='scrap_waste_quantity' type="number" id='scrap_waste_quantity' value={data.scrap_waste_quantity} onChange={(e)=>handle(e)} placeholder='scrap_waste_quantity'/>
//               </div>
//               <div>
//                 <label>remarks</label>
//                 <input className='remarks' type="text" id='remarks' value={data.remarks} onChange={(e)=>handle(e)} placeholder='remarks'/>
//               </div>


            

              
//               </div>
//               <div>
            
                

//                 <button onClick={(e)=> submit(e)} className='add_button'>add</button>
                

//               </div>
                

                

                
           
                
//                 </div>

// <div className='space'></div>
        
//     </div>
//   )
// }








import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { registerLocale } from 'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import en from 'date-fns/locale/en-US';
import './select_raw_inputs.css';

registerLocale('en', en);

export default function Select_raw_inputs() {
  const [rawNames, setRawNames] = useState([]);
  const [rawNo, setRawNo] = useState([]);
  const [qty, setQty] = useState([]);

  const url = "http://localhost:8080/production/save_Raw_materials";
  const [data, setData] = useState({
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
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function handleDateChange(date, id) {
    const formattedDate = date ? date.toISOString() : ""; // Check if date is truthy before formatting
    const newdata = { ...data, [id]: formattedDate };
    setData(newdata);
  }

  const submit = async (e) => {
    console.log(data)
    e.preventDefault();
    try {
      const resp = await Axios.post(url, {
        production_order_number: data.production_order_number,
        raw_material_name: data.raw_material_name,
        quantity_used: data.quantity_used,
        unit_of_measure: data.unit_of_measure,
        batch_number: data.batch_number,
        date_time_of_usage: data.date_time_of_usage,
        production_line: data.production_line,
        responsible_person: data.responsible_person,
        scrap_waste_quantity: data.scrap_waste_quantity,
        remarks: data.remarks
      });
      if (resp.data.error) {
        alert(resp.data.message);
      } else {
        alert(resp.data.message);
        setData({
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
      }
    } catch (error) {
      console.error(error);
    }
  }

  //raw availability
  const[raw_avalable, setRaw_avalable]= useState([]);
  const get_raw_availability= async() =>{
    const res =await Axios.get('http://localhost:8080/raw_input/raw_avalable')
    // console.log(res.data);
    setRaw_avalable(res.data);
  }
  useEffect(()=>{
    get_raw_availability()
  },[data.production_order_number])

  //according to selected raw name , get batch no
  const[batchNo,setBatchNo] = useState([]);
  const get_batchNo = async()=>{
    const res =await Axios.get(`http://localhost:8080/raw_input/get_batch_no/?raw_name='${data.raw_material_name}'`)
    // console.log(res.data)
    setBatchNo(res.data)
  }
  useEffect(()=>{
    get_batchNo();
  },[data.raw_material_name ])

  //get available qty according to raw batch no
  const[available_qty,setAvailable_qty] = useState([]);
  const get_available_qty = async()=>{
    const res =await Axios.get(`http://localhost:8080/raw_input/get_available_qty/?batch_no='${data.batch_number}'`)
    console.log(res.data)
    setAvailable_qty(res.data)
  }
  useEffect(()=>{
    get_available_qty();    
  },[data.batch_number])

  //set unit of measure
  const Set_units = () => {
    // console.log(available_qty)
   if(available_qty.length !== 0){
      setData({ unit_of_measure: available_qty[0].unit_of_measure } )
    }
  }
  useEffect(()=>{
    
    Set_units();
  },[data.batch_number])
  
  //get units
  const[units,setUnits]= useState([])
const Get_units = async()=>{
   const res = await Axios.get('http://localhost:8080/setting/all_units')
   setUnits(res.data)
}
useEffect(()=>{
  Get_units();
  
}

,[])
  return (
    <div>
      
       <div className='select_raw_inputs'>
       <div className='space'></div>
       <h1 className='select_raw_inputs_h1'>Select Raw Inputs to Process</h1>
      
      <div className='select_raw_inputs_div'>
      

        <div className='select_raw_inputs_div_1'>
          <div>
            <label>production_order_number</label>
            <input className='production_order_number' type="text" id='production_order_number' value={data.production_order_number} onChange={(e) => handle(e)} placeholder='production_order_number' />
          </div>
          
          
        </div>

        <div className='select_raw_inputs_div_2'>
        <div>
            <label>raw_material_name</label>
            <select className='raw_material_name' id='raw_material_name' value={data.raw_material_name} onChange={(e) => handle(e)}>
              <option>select raw name</option>
              {raw_avalable.map((product,index)=>(
                <option key={index} value={product.raw_material_name}>{product.raw_material_name} exp {product.expiry_date
                }</option>
              ))}
            </select>           
          </div>
          <div>
            <label>batch_number</label>
            <select className='batch_number' id='batch_number' value={data.batch_number} onChange={(e) => handle(e)}>
              <option>select batch no</option>
              {batchNo.map((product,index)=>(
                <option key={index} value={product.batch_number}>{product.batch_number} </option>
              ))}
            </select>
          </div>
          </div>

        <div className='select_raw_inputs_div_3'>
        <div className='select_raw_inputs_div_2_1'>
            <label>quantity_used</label>
            <p>availability: {available_qty.map((product,index)=>(
              <span key={index} >{product.available_quantity}</span>
            ))}</p>
            <input className='bquantity_used' type="number" id='quantity_used' value={data.quantity_used} onChange={(e) => handle(e)} placeholder='quantity_used' />
          </div>

          <div>
            <label>unit_of_measure</label>         


            <select className='unit_of_measure' id='unit_of_measure'value={data.unit_of_measure} onChange={(e)=>handle(e)} required='true'>
                <option>unit_of_measure</option>
                    {units.map((product, index)=>(
                        <option key={index} value={product.unit_name}>{product.unit_name}</option>
                    ))}    
                </select>   
            {/* <input className='unit_of_measure' type="text" id='unit_of_measure' value={data.unit_of_measure} onChange={(e) => handle(e)} placeholder='unit_of_measure' /> */}
          </div>
        </div>

        <div className='select_raw_inputs_div_4'>
        <div>
            <label>date_time_of_usage</label>
            <DatePicker
              className='date_time_of_usage'
              selected={data.date_time_of_usage ? new Date(data.date_time_of_usage) : null}
              onChange={date => handleDateChange(date, 'date_time_of_usage')}
              showTimeSelect
              timeFormat="HH:mm:ss"
              timeIntervals={15}
              dateFormat="yyyy-MM-dd HH:mm:ss"
              placeholderText='date_time_of_usage'
              locale="en"
            />
          </div>
          <div>
            <label>production_line</label>
            <input className='production_line' type="text" id='production_line' value={data.production_line} onChange={(e) => handle(e)} placeholder='production_line' />
          </div>
        </div>

        <div className='select_raw_inputs_div_5'>
        <div>
            <label>responsible_person</label>
            <input className='responsible_person' type="text" id='responsible_person' value={data.responsible_person} onChange={(e) => handle(e)} placeholder='responsible_person' />
          </div>
          <div>
            <label>scrap_waste_quantity</label>
            <input className='scrap_waste_quantity' type="number" id='scrap_waste_quantity' value={data.scrap_waste_quantity} onChange={(e) => handle(e)} placeholder='scrap_waste_quantity' />
          </div>
        </div>

        <div className='select_raw_inputs_div_6'>
        <div>
            <label>remarks</label>
            <input className='remarks' type="text" id='remarks' value={data.remarks} onChange={(e) => handle(e)} placeholder='remarks' />
          </div>
        </div>
          
         
          
          
        
          
         
          
          
          
          
          
          
          <button onClick={(e) => submit(e)} className='add_button_'>add</button>
        </div>
        
          
       
      
      <div className='space'></div>
    </div>
    </div>
    
  );
}
