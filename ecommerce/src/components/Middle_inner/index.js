import React, { useState } from 'react'
import FormBox from './formBox'
import NavLinks from './navLinks'
import { IcnosData } from './iconsnav'
import Logo from '../../../public/images/logo.png'

const ItemLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='#home'>home</a>
        </li>
        <li>
          <a href='#product'>product</a>
        </li>
        <li>
          <a href='#service'>service</a>
        </li>
        <li className='shop'>
          <a href='#shop' className='shop'>
            shop
            <i className='fa fa-angle-down'></i>
          </a>
          <ul>
            <li>
              <a href=''>cart</a>
            </li>
            <li>
              <a href=''>checkout</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#pages'>pages</a>
        </li>
        <li className='blog'>
          <a className='blog' href='#blog'>
            blog
            <i className='fa fa-angle-down'></i>
          </a>
          <ul>
            <li>
              <a href=''>blog single sidbar</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#contactus'>contactus</a>
        </li>
      </ul>
    </nav>
  )
}

const index = () => {
  const [showLinks, setShowLinks] = useState(true)
  return (
    <div className='middle-inner'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo image' />
        </div>
        <div className='form'>
          <div className='menu'>
            <span> all catgory</span> <i className='fa fa-angle-down'></i>
            <ul className='megamenu'>
              <li>all catgory</li>
              <li>watch</li>
              <li>mobile</li>
              <li>kids item</li>
            </ul>
          </div>
          <div className='search'>
            <input type='search' placeholder='search products heare ... ' />
            <button>
              {IcnosData.map((icons) => {
                const { id, icon } = icons
                if (id === 3) {
                  return <i key={id}>{icon}</i>
                }
              })}
            </button>
          </div>
        </div>
        <div className='icons'>
          {IcnosData.map((icnos) => {
            const { id, icon } = icnos
            if (id === 1) {
              return <i key={id}>{icon}</i>
            }
          })}
          {IcnosData.map((icnos) => {
            const { id, icon } = icnos
            if (id === 2) {
              return <i key={id}>{icon}</i>
            }
          })}
          <i className='backpack'>
            <FormBox />
          </i>
        </div>
        {/* state bars in media mopile  */}
      </div>
      <div className='state-bars'>
        <div className='stateBarsIcons'>
          <NavLinks
            setShowLinks={(s) => {
              setShowLinks(s)
            }}
            showLinks={showLinks}
          />
          {IcnosData.map((icnos) => {
            const { id, icon } = icnos
            if (id === 4) {
              return <i key={id}>{icon}</i>
            }
          })}
        </div>
        {showLinks && <ItemLinks />}
      </div>
    </div>
  )
}

export default index
