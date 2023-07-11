import React, { useEffect } from 'react'
import { useState } from 'react';

import Product_stock_report from '../product_stock_report/product_stock_report';
import Production_report from '../production_report/production_report';
import Raw_input_report from '../raw_input_report/raw_input_report';
import Raw_stock_report from '../raw_stock_report/raw_stock_report';
import Sales_report from '../sales_report/sales_report';

export default function Index_reports() {
    const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  const [showComponent5, setShowComponent5] = useState(false);

  const[classname_1,setclassname_1]=useState('setting_nav_item');
  const[classname_2,setclassname_2]=useState('setting_nav_item');
  const[classname_3,setclassname_3]=useState('setting_nav_item');
  const[classname_4,setclassname_4]=useState('setting_nav_item');
  const[classname_5,setclassname_5]=useState('setting_nav_item');

  const set_nav =()=>{

    if(showComponent1 ){
     
      setclassname_1('setting_nav_item_active')
      setclassname_2('setting_nav_item')
      setclassname_3('setting_nav_item')
      setclassname_4('setting_nav_item')
      setclassname_5('setting_nav_item')
    }else if(showComponent2){
      
      setclassname_2('setting_nav_item_active')
      setclassname_1('setting_nav_item')
      setclassname_3('setting_nav_item')
      setclassname_4('setting_nav_item')
      setclassname_5('setting_nav_item')

    }else if(showComponent3){
      
      setclassname_3('setting_nav_item_active')
      setclassname_1('setting_nav_item')
      setclassname_2('setting_nav_item')
      setclassname_4('setting_nav_item')
      setclassname_5('setting_nav_item')
    }else if(showComponent4){
      
      setclassname_4('setting_nav_item_active')
      setclassname_1('setting_nav_item')
      setclassname_2('setting_nav_item')
      setclassname_3('setting_nav_item')
      setclassname_5('setting_nav_item')
    
    
    }else if(showComponent5){

      setclassname_5('setting_nav_item_active')
      setclassname_1('setting_nav_item')
      setclassname_2('setting_nav_item')
      setclassname_3('setting_nav_item')
      setclassname_4('setting_nav_item')
    
    }
  }
  useEffect(()=>{
    set_nav()
  
  })

  const handleClick1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
   
  };
  const handleClick2 = () => {
    setShowComponent2(true);
    setShowComponent1(false);   
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
  }
  const handleClick3 = () => {
    setShowComponent3(true);
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent4(false);
    setShowComponent5(false);
  }
  const handleClick4 = () => {
    setShowComponent4(true);
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent5(false);
  }
  const handleClick5 = () => {
    setShowComponent5(true);
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
  }
  return (
    <div>
        <div>
        <div className='setting_nav'>
          <div className={classname_1}><a className='nav-link' href="#" onClick={handleClick1}> prduct stock </a></div>
          <div className={classname_2}><a className='nav-link' href="#" onClick={handleClick2}> sales  </a></div>
          <div className={classname_3}><a className='nav-link' href="#" onClick={handleClick3}> production  </a></div>
          <div className={classname_4}><a className='nav-link' href="#" onClick={handleClick4}> Raw stock  </a></div>
          <div className={classname_5}><a className='nav-link' href="#" onClick={handleClick5}> Raw input  </a></div>
          
          
        </div>
        
        <div>
          {showComponent1 && <Product_stock_report />}
          {showComponent2 && <Sales_report />}
          {showComponent3 && <Production_report />}
          {showComponent4 && <Raw_stock_report />}
          {showComponent5 && <Raw_input_report />}
        </div>
      </div>
    </div>
  )
}
