import React, { useEffect, useState, useRef } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { useScrollTo } from 'react-use-window-scroll'

const ScrollToUp = () => {
  const refContainer = useRef(null)
  const scrollTo = useScrollTo()
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      if (window.scrollY >= 900) {
        refContainer.current.style = 'block'
      } else {
        refContainer.current.style.display = 'none'
      }
    }
  }, [])
  const Style = {
    display: 'none',
  }
  return (
    <div className='scrollTo' style={Style} ref={refContainer}>
      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        <FaAngleUp />
      </button>
    </div>
  )
}
export default ScrollToUp

// scrollToUp = () => {
//   if (window.scrollY >= 800) {
//     document.querySelector('.scroll-to-up').style.display = 'block'
//   } else document.querySelector('.scroll-to-up').style.display = 'none'
// }
// addEventListener('scroll', scrollToUp)
// // to calculation leangth items card
// itemsLenght = (className) => {
//   let counter = document.querySelectorAll(className)
//   for (i = 0; i < counter.length; i++) {
//     console.log(counter[i])
//     document.querySelector('.leangth-items').innerHTML = [i]
//   }
// }
