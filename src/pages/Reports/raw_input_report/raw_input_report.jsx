import React, { useEffect } from 'react'
import { useState } from 'react';
import Axios from 'axios';
import './raw_input_report.css'

import Matireal_wise from './matireal_wise';
import Supplier_wise from './supplier_wise';
import Date_wise from './date_wise';

export default function Raw_input_report() {

  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);

  const[classname_1,setclassname_1]=useState('setting_nav_item_');
  const[classname_2,setclassname_2]=useState('setting_nav_item_');
  const[classname_3,setclassname_3]=useState('setting_nav_item_');

  const set_nav =()=>{

    if(showComponent1 ){
     
      setclassname_1('setting_nav_item_active_')
      setclassname_2('setting_nav_item_')
      setclassname_3('setting_nav_item_')
     
    }else if(showComponent2){
      
      setclassname_2('setting_nav_item_active_')
      setclassname_1('setting_nav_item_')
      setclassname_3('setting_nav_item_')
    
    }else if(showComponent3){
      
      setclassname_3('setting_nav_item_active_')
      setclassname_1('setting_nav_item_')
      setclassname_2('setting_nav_item_')
    
    
  }
}
  useEffect(()=>{
    set_nav()
  
  })

  const handleClick1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);
  };
  const handleClick2 = () => {
    setShowComponent2(true);
    setShowComponent1(false);   
    setShowComponent3(false);
  }
  const handleClick3 = () => {
    setShowComponent3(true);
    setShowComponent1(false);
    setShowComponent2(false);
  }

  return (
    <div>
      <div className='nav_2'>
          <div className={classname_1}><a className='nav-link_' href="#" onClick={handleClick1}> raw_name_wise  </a></div>
          <div className={classname_2}><a className='nav-link_' href="#" onClick={handleClick2}> supplier_wise  </a></div>
          <div className={classname_3}><a className='nav-link_' href="#" onClick={handleClick3}> date_wise  </a></div>
          
          
         </div>
         <div>
          {showComponent1 && <Matireal_wise/>}
          {showComponent2 && <Supplier_wise/>}
          {showComponent3 && <Date_wise/>}
       

         </div>
     
     
     
    </div>
  )
}
