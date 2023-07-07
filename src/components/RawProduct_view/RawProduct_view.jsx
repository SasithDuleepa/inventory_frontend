import React from 'react'
// import './Unit_view.css'

export default function Raw_view(props) {
  return (
    <div className='unit_view'>
        <div className='unit_view_div'>
            <p className='unit_view_p'> Raw Name </p>
            <p className='unit'>{props.unit}</p>
        </div>

    </div>
  )
}
