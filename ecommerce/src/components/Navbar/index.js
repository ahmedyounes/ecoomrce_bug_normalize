import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { OurIcons } from './icnos'
import { BestChild } from './data'

const BestSelling = () => {
  const Style = {
    position: 'absolute',
    padding: '20px 15px',
    backgroundColor: 'white',
    border: '1px solid #efe7e7b8',
    left: '100%',
    transform: 'translate(5px)',
    display: 'flex',
    borderLeft: '3px solid #f7941d',
    top: '0',
    gap: '25px',
  }

  return (
    <div className='parent' style={Style}>
      {BestChild.map((boxes) => {
        const { id, titleBt, img, info_0, info_1, info_2, info_3 } = boxes
        return (
          <div className='box' key={id}>
            <button>{titleBt}</button>
            <div className='img'>
              <img src={img} alt='' />
            </div>
            <p>{info_0}</p>
            <p>{info_1}</p>
            <p>{info_2}</p>
            <p>{info_3}</p>
          </div>
        )
      })}
    </div>
  )
}

const NewArriveChild = () => {
  const Style = {
    position: 'absolute',
    right: '-213px',
    padding: '10px',
    backgroundColor: 'white',
    borderLeft: ' 3px solid #f7941d',
    width: '80%',
  }
  return (
    <ul className='newarrive' style={Style}>
      <li>accessories</li>
      <li>best seling</li>
      <li>top 100 offer</li>
      <li>sunglass</li>
      <li>watch</li>
      <li>mans product</li>
      <li>ladies</li>
      <li>westrn</li>
      <li>demin</li>
    </ul>
  )
}

const ShopLinksChild = () => {
  return (
    <ul className='flow'>
      <li>cart</li>
      <li>checkout</li>
    </ul>
  )
}
const BlogLinksChild = () => {
  return (
    <ul className='flow'>
      <li>blog sigle sidebar</li>
    </ul>
  )
}
const Index = () => {
  // i wnna to wright this componetes just one time tn change just if condation
  // const Map = () => {
  //   {
  //     OurIcons.map((icnos) => {
  //       const { id, icon } = icnos
  //       if (id === 2) {
  //         return (
  //           <li key={id}>
  //             <span onClick={handleClick}>shop {icon}</span>
  //             {show && <ShopLinksChild />}
  //           </li>
  //         )
  //       }
  //     })
  //   }
  // }
  // to angle bottom click
  const [show, setShow] = useState(false)
  // trager function to reset usesate
  const handleClick = () => setShow(!show)
  // show blog angle bottom
  const [showBlog, setShowBlog] = useState(false)
  // trager function to reset usesate
  const handleClickBlog = () => setShowBlog(!showBlog)
  // showNewArrive click to show your child
  const [showNewArrive, setShowNewArrive] = useState(false)
  // showBestCh click to show your child
  const [showBestCh, setShowBestCh] = useState(false)
  // when i open tow links bat in the same tim
  //  this is a bug
  useEffect(() => {
    if (show) {
      setShowBlog(false)
    } else if (showBlog) {
      setShow(false)
    }
  }, [show, showBlog])

  // animation nav fixed position
  const refContainer = useRef(null)
  const refCategories = useRef(null)
  console.log(refContainer)

  window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset
    if (scrollPosition >= 240) {
      refContainer.current.style = [
        `
        position: fixed;
        width: 100%;
        z-index: 9;
        top: 0;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
        transform :translateY(100px);
        top:-100px;
        background-color: #ffffffa3;
        color: #333;
           `,
      ]
      refCategories.current.style = [`display:none`]
    } else {
      refContainer.current.style = [
        `
        position: relative;
           `,
      ]
      refCategories.current.style = [
        ` position: absolute;
        left: 0px;
        top: 86px;
        z-index: 3;
        background-color: white;
        color: rgb(0, 0, 0);
        padding: 5px 0px;
        width: 100%;
        border-width: 0px 0px 1px;
        border-color: rgba(239, 231, 231, 0.72);
        border-style: solid;`,
      ]
    }
  })
  /////////////////////////// there is abug ... to i wanna to did'nt wright the style of StyleCategories any time i wanna to put it as a components
  // style parent categories
  const StyleCategories = {
    position: 'absolute',
    left: '0',
    top: '86px',
    zIndex: '3',
    backgroundColor: 'white',
    color: '#000',
    padding: ' 5px 0px',
    width: '100%',
    borderWidth: '0px 0px 1px 0px',
    borderColor: '#efe7e7b8',
    borderStyle: 'solid',
  }

  return (
    <nav ref={refContainer}>
      <div className='container'>
        <div className='alllinks'>
          <div className='categories'>
            {OurIcons.map((icnos) => {
              const { id, icon } = icnos
              if (id === 1) {
                return <div key={id}>{icon}</div>
              }
            })}
            <ul
              className='categorieslinks'
              style={StyleCategories}
              ref={refCategories}
            >
              <li onClick={() => setShowNewArrive(!showNewArrive)}>
                {showNewArrive && <NewArriveChild />}
                {'new arrive '}
                {OurIcons.map((icnos) => {
                  const { id, icon } = icnos
                  if (id === 3) {
                    return <i key={id}>{icon}</i>
                  }
                })}
              </li>
              <li
                className='bestSellings'
                onClick={() => setShowBestCh(!showBestCh)}
              >
                {showBestCh && <BestSelling />}
                {'  best sellings'}
                {OurIcons.map((icnos) => {
                  const { id, icon } = icnos
                  if (id === 3) {
                    return <i key={id}>{icon}</i>
                  }
                })}
              </li>
              <li>accesspries</li>
              <li>top 100 offer</li>
              <li>sunglass</li>
              <li>watch</li>
              <li>mans product</li>
              <li>ladies</li>
              <li>westrn</li>
              <li>denim</li>
            </ul>
            <h2>Categories</h2>
          </div>
          <div className='links'>
            <ul>
              <li>
                <span>home</span>
              </li>
              <li>
                <span>product</span>
              </li>
              <li>
                <span>service</span>
              </li>
              {OurIcons.map((icnos) => {
                const { id, icon } = icnos
                if (id === 2) {
                  return (
                    <li key={id} className='shopNew'>
                      <span onClick={handleClick}>shop {icon}</span>
                      {show && <ShopLinksChild />}
                    </li>
                  )
                }
              })}
              <li>
                <span>pages</span>
              </li>
              {OurIcons.map((icnos) => {
                const { id, icon } = icnos
                if (id === 2) {
                  return (
                    <li key={id}>
                      <span onClick={handleClickBlog}>blog {icon} </span>
                      {showBlog && <BlogLinksChild />}
                    </li>
                  )
                }
              })}
              <li>
                <span>contact us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Index
