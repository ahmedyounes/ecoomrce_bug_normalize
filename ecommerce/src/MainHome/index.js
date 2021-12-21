import React from 'react'

// My Layout Padge
import Headr from '../components/Headr'
import Middle_inner from '../components/Middle_inner'
import Nav from '../components/Navbar'
import Single_leadr from '../components/Single_Leadr'
import SmallPanner from '../components/Small-Banner'
import Trending_item from '../components/Trending_Item'
import Pig_titel from '../components/Pig_Title'
import Shop_lest from '../components/Shop_Lest'
import Our_blog from '../components/Our_Blog'
import Services from '../components/Services'
import Form_input from '../components/Form_Input'
import Footer from '../components/Footer'
import ScrollToUp from '../components/ScrollToUp'
import BtnBox from '../components/btnGetPro'
import { Link } from 'react-router-dom'
// FontAwsome Icnos
const MainHome = () => {
  return (
    <div>
      <Headr />
      <Middle_inner />
      <Nav />
      <Single_leadr />
      <SmallPanner />
      <Trending_item />
      <Pig_titel />
      <Shop_lest />
      <Our_blog />
      <Services />
      <Form_input />
      <Footer />
      <ScrollToUp />
      <BtnBox />
      {/* <Link to='/seond'>
        <button variant='outlined'>click</button>
      </Link> */}
    </div>
  )
}
export default MainHome
