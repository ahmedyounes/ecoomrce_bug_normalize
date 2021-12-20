import React from 'react'

const index = () => {
  return (
    <div className='input-felid'>
      <div className='container'>
        <h3>NEWSLETTER</h3>
        <p>
          Subscribe to our newsletter and get <span>10%</span> off your first
          purchase
        </p>
        <div className='input'>
          <input type='text' placeholder='your email address' />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default index
