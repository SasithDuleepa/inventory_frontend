import React from 'react'
import './index.css';

import InventoryADD from '../add/inventoryADD'
import InventoryEDITE from '../edite/inventoryEDITE';

import InventoryVIEW from '../view/inventoryVIEW'

export default function Index() {
  return (
    <div>
        
        <div><InventoryADD/></div>
        {/* <div><InventoryEDITE/></div>
        
        <div><InventoryVIEW/></div> */}
    </div>
  )
}
