import React, { useEffect,useState } from 'react'
import { Data } from './data'
const index = () => {
  return (
    <div className='services' id='service'>
      <div className='container'>
        {Data.map((box) => {
          const { id, icon, title, inof } = box
          return (
            <div className='box' key={id}>
              <i className='rotate'> {icon}</i>
              <h4>{title}</h4>
              <p>Orders over $100</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default index
