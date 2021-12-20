import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <FaSearch onClick={() => setShow(!show)} />
      {show && <FormSearch />}
    </div>
  )
}
const FormSearch = () => {
  return (
    <div className='parent_search'>
      <div className='mainSerch'>
        <div className='child'>
          <input autoFocus type='text' placeholder='search here...' />
          <i>
            <FaSearch />
          </i>
        </div>
      </div>
    </div>
  )
}

export default Search
