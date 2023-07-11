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
    const[product, setproduct] = useState('link_li')
    const[sales, setSales] = useState('link_li')
    const[input, setInput] = useState('link_li')
    const[production, setProduction] = useState('link_li')
    const[production_input, setProduction_input] = useState('link_li')
    const[Expenses,setExpenses] = useState('link_li')
    const[supplier, setSupplier] = useState('link_li')
    const[customer, setCustomer] = useState('link_li')    
    const[setting, setSetting] = useState('link_li')
    const[reports, setReports] = useState('link_li')
    
   

    useEffect(()=>{
        if(currentPath=== '/'){
            setDashboad('link_li_clicked')    
        }else if(currentPath=== '/add_product'){
            setproduct('link_li_clicked')
        }else if(currentPath=== '/sales'){
            setSales('link_li_clicked')
        }else if(currentPath === '/Raw_input'){
            setInput('link_li_clicked')
        }else if(currentPath === "/Production"){
            setProduction('link_li_clicked')
        }else if(currentPath === "/Production_inputs"){
            setProduction_input('link_li_clicked')        
        }else if(currentPath === "/expenses"){
            setExpenses('link_li_clicked')        
        }else if(currentPath === "/supplier"){
            setSupplier('link_li_clicked')        
        }else if(currentPath === "/setting"){
            setSetting('link_li_clicked')
        }else if(currentPath === "/reports"){
            setCustomer('link_li_clicked')
        
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
                    <li className={input}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href='/Raw_input' className={navlinknames}>raw input</a></div></div></li>
                    <li className={production_input}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href="/Production_inputs" className={navlinknames}>production Inputs</a></div></div></li>
                    
                    <li className={product}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href='/add_product' className={navlinknames}>Product</a></div></div></li>
                    <li className={sales}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href='/sales' className={navlinknames}>Sale</a></div></div></li>
                    
                    <li className={production}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href="/Production" className={navlinknames}>production</a></div></div></li>
                    <li className={Expenses}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href="/expenses" className={navlinknames}>Expenses</a></div></div></li>
                    <li className={supplier}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href="/supplier" className={navlinknames}>Suppliers</a></div></div></li>
                    <li className={setting}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href="/setting" className={navlinknames}>Setting</a></div></div></li>
                    <li className={reports}><div className='Nav-link'><div className='link-icon'> < BiMenu/> </div> <div className='link-name'><a href="/reports" className={navlinknames}>Reports</a></div></div></li>
                    
                </ul>

            </div>
        </div>
       
    </div>
  )
}
