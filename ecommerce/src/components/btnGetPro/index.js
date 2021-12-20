import React, { useState } from 'react'

const index = () => {
  const [isActive, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <div className={`left-fixed ${isActive ? 'active' : null}`}>
      <a className='click-left' onClick={handleToggle} href='#test'>
        get pro
      </a>
      <ul>
        <li>Pro Version Features</li>
        <li>4+ premade home pages</li>
        <li>19+ html pages</li>
        <li>Color Plate With 12+ Colors</li>
        <li>Sticky Header / Sticky Filters</li>
        <li>Quick view / Product Countdown</li>
        <div className='btn'>
          <a href=''>
            <button>buy pro version</button>
          </a>
          <a href=''>
            <button>view detalis</button>
          </a>
        </div>
      </ul>
    </div>
  )
}

export default index
