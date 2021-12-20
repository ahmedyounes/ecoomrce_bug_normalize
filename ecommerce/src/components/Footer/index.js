import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { SiFreelancer } from 'react-icons/si'
import { BsFillSuitHeartFill } from 'react-icons/bs'
const index = () => {
  return (
    <div className='footer' id='contactus'>
      <div className='container'>
        <div className='box'>
          <div className='img'>
            <img src='./images/logo2.png' alt='' />
          </div>
          <p>
            Praesent dapibus, neque id cursus ucibus, tortor neque egestas
            augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
            tincidunt quis, accumsan porttitor, facilisis luctus, metus
          </p>
          <div className='number'>
            <p>Got Question? Call us 24/7</p>
            <span>+01273366071</span>
          </div>
        </div>
        <div className='box animation'>
          <h4>Information</h4>
          <p>About Us</p>
          <p>Faq</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
          <p>Help</p>
        </div>
        <div className='box animation'>
          <h4>Customer Service</h4>
          <p>Payment Methods</p>
          <p>Money-back</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>Privacy Policy</p>
        </div>
        <div className='box animation'>
          <h4>Get In Tuch</h4>
          <p>NO. 342 - London Oxford Street.</p>
          <p>012 United Kingdom.</p>
          <p>info@eshop.com</p>
          <p>+01551783366</p>
          <div className='icons'>
            <i>
              <FiFacebook />
            </i>
            <i>
              <FiTwitter />
            </i>
            <i>
              <FiInstagram />
            </i>
            <i>
              <FaFreeCodeCamp />
            </i>
            <i>
              <SiFreelancer />
            </i>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div className='card'>
            <p>
              Copyright&copy;
              <i>
                <BsFillSuitHeartFill />
              </i>
              2021 Marwan Abubakr - All Rights Reserved.
            </p>
            <img src='./images/payments (1).png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
