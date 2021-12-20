import React, { useState } from 'react'
import { Data } from './data'

const index = () => {
  const [state, setstate] = useState(false)
  const [person, removePeorson] = useState(Data)
  const removeItem = (index) => {
    console.log(index)
    removePeorson((item) => {
      let newPeople = item.filter((person) => person.id !== index)
      console.log(item)
      console.log(index)

      return newPeople
    })
  }
  const filter = () => {
    // Data.filter((box) => {
    //   return box.id === 1
    // })
    console.log('yse')
  }
  return (
    <div className='tranding-items' id='product'>
      <h2 className='main-title'>Trending Item</h2>
      <div className='links'>
        <a href='#' onClick={() => removeItem()}>
          man
        </a>
        <a href='#'>woman</a>
        <a href='#'>kids</a>
        <a href='#'>accessories</a>
        <a href='#'>essential</a>
        <a href='#'>prices</a>
      </div>
      <div className='container'>
        {Data.map((box) => {
          const {
            id,
            img,
            title,
            icon_0,
            icon_1,
            icon_2,
            title_2,
            price,
            linkIcnos,
          } = box
          return (
            <div key={id} className='item'>
              <div className='img'>
                <img src={img} alt='dafult imge' />
                <div className='box'>
                  <div className='title'>{title}</div>
                  <div className='icnos'>
                    <i>
                      {icon_0}
                      <a className='link I-icnos'>{linkIcnos}</a>
                    </i>
                    <i>
                      {icon_1}
                      <a className='link I-icnos'>{linkIcnos}</a>
                    </i>
                    <i>
                      {icon_2}
                      <a className='link I-icnos'>{linkIcnos}</a>
                    </i>
                  </div>
                </div>
              </div>
              <div className='info'>
                <div className='title'>{title_2}</div>
                <div className='price'>$ {price}.00</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default index
