import React from 'react'

const index = () => {
  return (
    <nav>
      <div className='container'>
        <div className='categories'>
          <h2 className='hover'>
            <i className='fa fa-bars'></i> categories
          </h2>
          {/* <!-- main ul --> */}
          <ul className='I-ul'>
            <li className='categories-links'>
              <a>
                new arrive
                <i className='fa fa-angle-down'></i>
              </a>
              {/* <!-- insert II.ul {new arrive} --> */}
              <ul className='II-ul'>
                <li>
                  <span>accessories</span>
                </li>
                <li>
                  <span>best selling</span>
                </li>
                <li>
                  <span>top 100 offer</span>
                </li>
                <li>
                  <span>sunglass</span>
                </li>
                <li>
                  <span>watch</span>
                </li>
                <li>
                  <span>mans product</span>
                </li>
                <li>
                  <span>ladies</span>
                </li>
                <li>
                  <span>westrn</span>
                </li>
                <li>
                  <span>denim</span>
                </li>
              </ul>
            </li>
            {/* <!-- insert III.ul {best selling}--> */}
            <li className='bestSelling-links'>
              <span>
                best sellings
                <i className='fa fa-angle-down'></i>
              </span>
              <ul className='III-ul'>
                <li>
                  <span>
                    <button>shop kids</button>
                  </span>
                  <div className='img'>
                    <img src='./images/mega-menu1.jpg' alt='' />
                  </div>
                  <div className='links-kids'>
                    <span>kids toys</span>
                    <span>kids travel car</span>
                    <span>kids color shape</span>
                    <span>kids tent</span>
                  </div>
                </li>
                <li>
                  <span>
                    <button>shop mens</button>
                  </span>
                  <div className='img'>
                    <img src='./images/mega-menu2.jpg' alt='' />
                  </div>
                  <div className='links-kids'>
                    <span>watch </span>
                    <span>t-shirt </span>
                    <span>hoodies</span>
                    <span>formal pant</span>
                  </div>
                </li>
                <li>
                  <a>
                    <button>shop womens</button>
                  </a>
                  <div className='img'>
                    <img src='./images/mega-menu3.jpg' alt='' />
                  </div>
                  <div className='links-kids'>
                    <span>ladies shirt </span>
                    <span>ladies frog </span>
                    <span>ladies sun glass</span>
                    <span>ladies watch </span>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <span>accessories</span>
            </li>
            <li>
              <span>top 100 offer</span>
            </li>
            <li>
              <span>sunglass</span>
            </li>
            <li>
              <span>watch</span>
            </li>
            <li>
              <span>mans product</span>
            </li>
            <li>
              <span>ladies</span>
            </li>
            <li>
              <a>westrn</a>
            </li>
            <li>
              <span>denim</span>
            </li>
          </ul>
        </div>
        <ul className='links'>
          <li>
            <span>home</span>
          </li>
          <li>
            <span>product</span>
          </li>
          <li>
            <span>service</span>
          </li>
          <li className='list-parent'>
            <span>
              shop <i className='fa fa-angle-down'></i>
            </span>
            <ul className='list-child'>
              <li>
                <span>cart</span>
              </li>
              <li>
                <span>checkout</span>
              </li>
            </ul>
          </li>
          <li>
            <span>pages</span>
          </li>
          <li className='list-parent'>
            <span>
              blog
              <i className='fa fa-angle-down'></i>
              <ul className='list-child'>
                <li>
                  <span>blog single sidebar</span>
                </li>
              </ul>
            </span>
          </li>
          <li>
            <span>contact us</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default index
