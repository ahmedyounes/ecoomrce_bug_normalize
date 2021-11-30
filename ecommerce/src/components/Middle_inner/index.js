import React from 'react'
import { useState } from 'react'
import { BsSearch, BsFillHeartFill } from 'react-icons/bs'
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { AiOutlineBars } from 'react-icons/ai'

import Logo from '../../../public/images/logo.png'

const index = () => {
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
              <i>
                <BsSearch />
              </i>
            </button>
          </div>
        </div>
        <div className='icons'>
          <i>
            <FaUserAlt />
          </i>
          <i>
            <BsFillHeartFill />
          </i>
          <i className='backpack'>
            <ShowCardBox />
          </i>
        </div>
        {/* state bars in media mopile  */}
      </div>
      <div className='state-bars'>
        <div className='icons'>
          <FaSearchIcon />
          <AiOutlineBars />
        </div>
        {/* <ul>
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
        </ul> */}
      </div>
    </div>
  )
}
// Start BoxOrder
const Boxorder = () => {
  return (
    <div className='box-card-relative'>
      <div className='card'>
        <div className='title'>
          <p>
            <span className='leangth-items'>2</span> items
          </p>
          <p>view cart</p>
        </div>
        <div className='box I'>
          <div className='info'>
            <p className='label'>woman ring</p>
            <p className='price price-box'>$99.00</p>
            <button className='button-I'>x</button>
          </div>
          <div className='img'>
            <img src='./images/product-1.jpg' alt='' />
          </div>
        </div>
        <div className='box II'>
          <div className='info'>
            <p className='label'>woman necklace</p>
            <p className='price price-box'>$35.00</p>
            <button className='II'>x</button>
          </div>
          <div className='img'>
            <img src='./images/product-2.jpg' alt='' />
          </div>
        </div>
        <div className='footer-box'>
          <div className='footer-info'>
            <p>total</p>
            <p className='total-price'>$134.00</p>
          </div>
          <button>checkout</button>
        </div>
      </div>
    </div>
  )
}
const ShowCardBox = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <FaShoppingCart onClick={() => setShow(!show)} />
      {show && <Boxorder />}
    </div>
  )
}
// End BoxOrder

// Start Mean Search
const FaSearchIcon = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <FaSearch onClick={() => setShow(!show)} />
      {show && <FormSearch />}
    </div>
  )
}
const FormSearch = () => {
  return (
    <div className='parent_search'>
      <div className='mainSerch'>
        <div className='child'>
          <input autoFocus type='text' placeholder='search here...' />
          <i>
            <FaSearch />
          </i>
        </div>
      </div>
    </div>
  )
}
export default index
