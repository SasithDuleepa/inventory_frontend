import React from 'react'
import './Unit_view.css'

export default function Unit_view(props) {
  return (
    <div className='unit_view'>
        <div className='unit_view_div'>
            <p className='unit_view_p'> measure unit </p>
            <p className='unit'>{props.unit}</p>
        </div>

    </div>
  )
}
