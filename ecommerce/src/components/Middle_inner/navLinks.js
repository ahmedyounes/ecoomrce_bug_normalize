import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineBars } from 'react-icons/ai'

const NavLinks = ({ setShowLinks, showLinks }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (showLinks) {
      setShowLinks(false)
    } else {
      setShowLinks(true)
    }
  }, [show])
  return (
    <React.Fragment>
      <AiOutlineBars onClick={() => setShow(!show)} />
    </React.Fragment>
  )
}

export default NavLinks
