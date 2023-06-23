import React from 'react'
import './dashboad.css'



import Graph1 from '../../components/Graph-1/graph1';
import Graph2 from '../../components/Graph-2/graph2';
import Graph3 from '../../components/Graph-3/graph3';
import Graph4 from '../../components/Graph-4/graph4';




import Team from './../../icons/team.png'
import Category from './../../icons/category.png'
import Product from './../../icons/packaging.png'
import Oders from './../../icons/checklist.png'

export default function Dashboad() {
  return (
    <div>
        <h1 className='dashboad-title'>Inventory Management Dashboad</h1>

        <div className='dashboad'>
            <div className='dashboad-summery'>

                <div className='dashboad-summery-item-1'>
                    <div className='dashboad-summery-item-1-tot-vendors'>
                        <p>Total Vendors</p>
                        <p>2</p>
                    </div>
                    <div className='dashboad-summery-item-1-icon'>
                        <img className='team-img' src={Team} alt=""/>
                    </div>
                </div>

                <div className='dashboad-summery-item-2'>
                    <div className='dashboad-summery-item-2-tot-category'>
                        <p>Total Categories</p>
                        <p>2</p>
                    </div>
                    <div className='dashboad-summery-item-2-icon'>
                        <img className='catergory-img' src={Category} alt=""/>
                    </div>
                </div>

                <div className='dashboad-summery-item-3'>
                    <div className='dashboad-summery-item-3-tot-products'>
                        <p>Total Products</p>
                        <p>2</p>
                    </div>
                    <div className='dashboad-summery-item-3-icon'>
                        <img className='product-img' src={Product} alt=""/>
                    </div>
                </div>

                <div className='dashboad-summery-item-4'>
                    <div className='dashboad-summery-item-4-tot-orders'>
                        <p>Total Orders</p>
                        <p>2</p>                        
                    </div>
                    <div className='dashboad-summery-item-4-icon'>
                        <img className='order-img' src={Oders} alt=""/>
                    </div>
                </div>
            </div>

            <div className='section-2'> 

            <div className='sales-report'>
                <h2>sales report</h2>
                <div>
                    <Graph1/>
                </div>
            </div>

            <div className='product-details'>
                <h2> available products</h2>
                <div><Graph2/></div>
            </div>
            </div>

            <div className='section-3'>
                <div className='category-wise-sales'>
                    <h2>category wise sales</h2>
                    <div><Graph3/></div>
                </div>
                <div className='category-wise-quotation'>
                    <h2>category wise quotation</h2>
                    <div><Graph4/></div>

                </div>
            </div>

            <div className='section-4'>
                <div className='purchase-report'>
                    <h2>purchase report</h2>

                </div>
            </div>
        </div>
       
    </div>
  )
}
