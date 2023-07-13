import React, { useEffect, useState } from 'react'
import './dashboad.css'
import Axios  from 'axios';



import Raw_stock from './raw_stock/raw_stock';
import ProductStock from './product_stock/product_stock';




import Team from './../../icons/team.png'
import Category from './../../icons/category.png'
import Product from './../../icons/packaging.png'
import Oders from './../../icons/checklist.png'

import View from '../../components/raw_stock/view/view';

export default function Dashboad() {

const[tot_rawSupplier, setTot_rawSupplier] = useState('loading..')
  const Raw_suppliers = async()=>{
    const res =await Axios.get('http://localhost:8080/supplier/Get_all')
    // console.log(res.data)
    setTot_rawSupplier(res.data.length)
  
      }   
 
  //get total products
  const[tot_products, setTot_products] = useState('loading..')
  const Total_products = async()=>{
    const res =await Axios.get('http://localhost:8080/product_name/get_all_names')
    // console.log(res.data)
    setTot_products(res.data.length)
  
      
  }
  
  //get raw names
  const[raw_names, setRaw_names] = useState('loading..')
  const Raw_names = async()=>{
    const res =await Axios.get('http://localhost:8080/raw_material_name/get_raw_names')
    console.log(res.data)
    setRaw_names(res.data.length) 
      
  }
  useEffect(()=>{
    Raw_suppliers()
    Raw_names()
    Total_products()
  
  
  
  }) 
  return (
    <div className='Dashboad'>
        <h1 className='dashboad-title'>Inventory Management Dashboad</h1>

        <div className='dashboad'>
            <div className='dashboad-summery'>

                <div className='dashboad-summery-item-1'>
                    <div className='dashboad-summery-item-1-tot-vendors'>
                        <p className='dashboad_p'>Raw suppliers</p>
                        <p className='dashboad_p_'>{tot_rawSupplier}</p>
                    </div>
                    <div className='dashboad-summery-item-1-icon'>
                        <img className='team-img' src={Team} alt=""/>
                    </div>
                </div>

                <div className='dashboad-summery-item-2'>
                    <div className='dashboad-summery-item-2-tot-category'>
                        <p className='dashboad_p'> Raw Categories</p>
                        <p className='dashboad_p_'>{raw_names}</p>
                    </div>
                    <div className='dashboad-summery-item-2-icon'>
                        <img className='catergory-img' src={Category} alt=""/>
                    </div>
                </div>

                <div className='dashboad-summery-item-3'>
                    <div className='dashboad-summery-item-3-tot-products'>
                        <p className='dashboad_p'>Total Products</p>
                        <p className='dashboad_p_'>{tot_products}</p>
                    </div>
                    <div className='dashboad-summery-item-3-icon'>
                        <img className='product-img' src={Product} alt=""/>
                    </div>
                </div>

                {/* <div className='dashboad-summery-item-4'>
                    <div className='dashboad-summery-item-4-tot-orders'>
                        <p className='dashboad_p'>Total Orders</p>
                        <p className='dashboad_p_'>2</p>                        
                    </div>
                    <div className='dashboad-summery-item-4-icon'>
                        <img className='order-img' src={Oders} alt=""/>
                    </div>
                </div> */}
            </div>

            <div>
                <div className='dashboad-raw_stock_view'>
                <div ><Raw_stock/></div>
                <div ><ProductStock/></div>
                </div>
                
            </div>

          
        </div>
       
    </div>
  )
}
