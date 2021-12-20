import React from 'react'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Data } from './dataOfBox'

const FormBox = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <FaShoppingCart onClick={() => setShow(!show)} />
      {show && <Boxorder />}
    </div>
  )
}
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
        {Data.map((box) => {
          const { id, heading, price, img } = box
          return (
            <div className='box I' key={id}>
              <div className='info'>
                <p className='label'>{heading}</p>
                <p className='price price-box'>$ {price}</p>
                <button className='button-I'>x</button>
              </div>
              <div className='img'>
                <img src={img} alt='' />
              </div>
            </div>
          )
        })}
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
export default FormBox
