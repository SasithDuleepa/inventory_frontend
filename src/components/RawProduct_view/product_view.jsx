import React from 'react'
// import './Unit_view.css'

export default function Product_view(props) {
  return (
    <div className='unit_view'>
        <div className='unit_view_div'>
            <p className='unit_view_p'> Product Name </p>
            <p className='unit'>{props.name}</p>
        </div>

    </div>
  )
}
