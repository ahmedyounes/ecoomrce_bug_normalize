import React from 'react'
import {
  FaClock,
  FaHeadphones,
  FaUserAlt,
  FaEnvelope,
  FaPowerOff,
} from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'

const index = () => {
  return (
    <div>
      <div className='headr'>
        <div className='container'>
          <ul className='connect'>
            <li>
              <i>
                <FaHeadphones />
              </i>
              <span>01273366071</span>
            </li>
            <li>
              <i>
                <FaEnvelope />
              </i>
              <span>marwanabubakr0o0@gmail.com</span>
            </li>
          </ul>
          <ul className='info'>
            <li>
              <i>
                <ImLocation />
              </i>
              <span>store location</span>
            </li>
            <li>
              <i>
                <FaClock />
              </i>
              <span>daily deal</span>
            </li>
            <li>
              <i>
                <FaUserAlt />
              </i>
              <span>my account</span>
            </li>
            <li>
              <i>
                <FaPowerOff />
              </i>
              <span>login</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default index
