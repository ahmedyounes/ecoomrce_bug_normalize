import React from 'react'
// My Layout Padge
import Headr from './components/Headr'
import Middle_inner from './components/Middle_inner'
import Nav from './components/Navbar'
import Single_leadr from './components/Single_Leadr'
import Trending_item from './components/Trending_Item'
import Pig_titel from './components/Pig_Title'
import Shop_lest from './components/Shop_Lest'
import Our_blog from './components/Our_Blog'
import Services from './components/Services'
import Form_input from './components/Form_Input'
import Footer from './components/Footer'
// FontAwsome Icnos
const App = () => {
  return (
    <div>
      <Headr />
      <Middle_inner />
      <Nav />
      <Single_leadr />
      <Trending_item />
      <Pig_titel />
      <Shop_lest />
      <Our_blog />
      <Services />
      <Form_input />
      <Footer />
    </div>
  )
}
export default App
