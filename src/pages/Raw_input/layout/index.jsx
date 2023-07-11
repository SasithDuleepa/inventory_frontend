import React, { useEffect } from 'react'
import { useState } from 'react';

import Add from '../add/add';
import Input_stock_view from '../view/input_stock_view';
import Edite from '../edit/edite';

export default function Raw_index() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);

  const[classname_1,setclassname_1]=useState('setting_nav_item');
  const[classname_2,setclassname_2]=useState('setting_nav_item');
  const[classname_3,setclassname_3]=useState('setting_nav_item');

  const set_nav =()=>{

    if(showComponent1 ){
     
      setclassname_1('setting_nav_item_active')
      setclassname_2('setting_nav_item')
      setclassname_3('setting_nav_item')
     
    }else if(showComponent2){
      
      setclassname_2('setting_nav_item_active')
      setclassname_1('setting_nav_item')
      setclassname_3('setting_nav_item')
      

    }else if(showComponent3){
      
      setclassname_3('setting_nav_item_active')
      setclassname_1('setting_nav_item')
      setclassname_2('setting_nav_item')
      
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
      <div>
         <div className='setting_nav'>
          <div className={classname_1}><a className='nav-link' href="#" onClick={handleClick1}> Add Raw  </a></div>
          <div className={classname_2}><a className='nav-link' href="#" onClick={handleClick2}> View  </a></div>
          <div className={classname_3}><a className='nav-link' href="#" onClick={handleClick3}> Edite  </a></div>
         
          
          
         </div>
        
         <div>
          {showComponent1 && <Add />}
          {showComponent2 && <Input_stock_view />}
          {showComponent3 && <Edite />}
         

         </div>
      </div>
      
   
    </div>
  )
}
