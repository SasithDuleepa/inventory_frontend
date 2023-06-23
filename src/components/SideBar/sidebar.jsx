import React, { useEffect, useState } from 'react'
import './sidebar.css';
import { BiMenu , BiCaretLeft , BiChalkboard } from "react-icons/bi";


export default function Sidebar() {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    const[icon, setIcon] = useState(<BiCaretLeft/>);
    const[navname, setNavname] = useState("nav-bar");
    const[navlinknames, setNavlinknames] = useState("nav-link-names");

    const[nav_link, setNavelink] = useState('link_li')

    //set nav link class names
    const[dashboad, setDashboad] = useState('link_li')
    const[sales, setSales] = useState('link_li')
    const[purchase_order, setPurchase_order] = useState('link_li')
    const[sales_order, setSales_order] = useState('link_li')
    const[customer, setCustomer] = useState('link_li')
    const[supplier, setSupplier] = useState('link_li')
    const[employee, setEmployee] = useState('link_li')
    const[expense, setExpense] = useState('link_li')
    const[income, setIncome] = useState('link_li')
    const[report, setReport] = useState('link_li')
    const[setting, setSetting] = useState('link_li')
    const[add_product, setAdd_product] = useState('link_li')
    const[add_purchase_order, setAdd_purchase_order] = useState('link_li')
    const[add_sales_order, setAdd_sales_order] = useState('link_li')

    useEffect(()=>{
        if(currentPath=== '/'){
            setDashboad('link_li_clicked')    
        }else if(currentPath=== '/add_product'){
            setAdd_product('link_li_clicked')
        }else if(currentPath=== '/sales'){
            setSales('link_li_clicked')
        }
    },[])



    const changeIcon=()=>{
        
        if (icon.type.name === 'BiMenu'){
            setIcon(<BiCaretLeft/>)
            setNavname("nav-bar")
            setNavlinknames('nav-link-names')
        }else if(icon.type.name=== 'BiCaretLeft'){
            setIcon(<BiMenu/>)
            setNavname("nav-bar-toggle")
            setNavlinknames("nav-link-names-toggle")
        }
    }
  return (
    <div className='Sidebar'>
        {/* <div className={navname}> */}
        <div className="nav-bar">
        {/* <a onClick={changeIcon}  className='Nav-icon-on'>{icon}</a> */}
        
            <div className='head'>

            </div>

            <div className='nav-menu'>
                
                <ul>
                    <li className={dashboad}><div className='Nav-link'><div className='link-icon'><BiChalkboard/></div><div className='link-name'><a href='/' className={navlinknames}>Dashboard</a></div></div></li>
                    
                    
                    
                    <li className={add_product}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href='/add_product' className={navlinknames}>Product</a></div></div></li>
                    <li className={add_purchase_order}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href='/sales' className={navlinknames}>Sale</a></div></div></li>
                    <li className={sales}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a className={navlinknames}>Sales Orders</a></div></div></li>
                    <li className={report}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a className={navlinknames}>Reports and Analytics</a></div></div></li>
                    
                    <li><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a className={navlinknames}>Suppliers</a></div></div></li>
                    <li><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a className={navlinknames}>Customers</a></div></div></li>
                    <li><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a className={navlinknames}>User Management</a></div></div></li>
                    <li><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a className={navlinknames}>Settings</a></div></div></li>
                    
                </ul>

            </div>
        </div>
       
    </div>
  )
}
